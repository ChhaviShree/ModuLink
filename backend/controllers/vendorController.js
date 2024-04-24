const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Vendor = require("../models/vendorModel");

// Vendor registration
const addVendorRegistration = async (req, res) => {
  try {
    const {
      companyName,
      businessRegistrationNumber,
      legalBusinessStructure,
      yearOfEstablishment,
      contactPersonName,
      contactPersonTitle,
      businessAddress,
      country,
      phoneNumber,
      emailAddress,
      password,
      website,
      linkedInProfile,
      otherSocialMedia,
      productServiceType,
      briefDescription,
      certifications,
      yearsOfExperience,
      previousProjects,
      specializedExpertise,
      references,
      insuranceInfo,
      compliance,
      paymentTerms,
      paymentMethods,
      collaborationTypes,
      geographicAreas,
      projectScale,
      attachments,
      termsAndConditions,
    } = req.body;
    const existingVendor = await Vendor.findOne({
      emailAddress: emailAddress,
    });
    if (existingVendor) {
      return res.status(400).send("Vendor already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    let formattedAttachments = [];
    if (Array.isArray(attachments)) {
      formattedAttachments = attachments.map((attachment) => String(attachment));
    }
    const vendor = await Vendor.create({
      companyName,
      businessRegistrationNumber,
      legalBusinessStructure,
      yearOfEstablishment,
      contactPersonName,
      contactPersonTitle,
      businessAddress,
      country,
      phoneNumber,
      emailAddress,
      password: hashedPassword,
      website,
      linkedInProfile,
      otherSocialMedia,
      productServiceType,
      briefDescription,
      certifications,
      yearsOfExperience,
      previousProjects,
      specializedExpertise,
      references,
      insuranceInfo,
      compliance,
      paymentTerms,
      paymentMethods,
      collaborationTypes,
      geographicAreas,
      projectScale,
      attachments: formattedAttachments,
      termsAndConditions,
    });

    res.status(201).json({ vendor });
  } catch (error) {
    console.error(error);
    res.status(400).json({error:error.message});
  }
};

// Vendor login
const login = async (req, res) => {
  try {
    const { emailAddress, password } = req.body;
    const vendor = await Vendor.findOne({ emailAddress });
    if (!vendor) {
      return res.status(400).json({ message: "Invalid Email" });
    }
    const isPasswordValid = await bcrypt.compare(password, vendor.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password" });
    }
    const token = jwt.sign(
      { email: vendor.emailAddress, id: vendor._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.status(200).json({ email: vendor.emailAddress, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { addVendorRegistration, login };
