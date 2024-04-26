const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema({
  companyName: String,
  businessRegistrationNumber: String,
  legalBusinessStructure: String,
  yearOfEstablishment: String,
  contactPersonName: String,
  contactPersonTitle: String,
  businessAddress: String,
  country: String,
  phoneNumber: String,
  emailAddress: String,
  password: String,
  website: String,
  linkedInProfile: String,
  otherSocialMedia: String,
  productServiceType: String,
  briefDescription: String,
  certifications: String,
  yearsOfExperience: String,
  previousProjects: String,
  specializedExpertise: String,
  references: String,
  insuranceInfo: String,
  compliance: String,
  paymentTerms: String,
  paymentMethods: String,
  collaborationTypes: String,
  geographicAreas: String,
  projectScale: String,
  attachments: [String],
  termsAndConditions: Boolean,
});

const Vendor = mongoose.model("Vendor", vendorSchema);

module.exports = Vendor;
