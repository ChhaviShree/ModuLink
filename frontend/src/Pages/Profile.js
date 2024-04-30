import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";

const Profile = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "Example Company Inc.",
    businessRegistrationNumber: "123456789",
    legalBusinessStructure: "LLC",
    yearOfEstablishment: "2005",
    contactPersonName: "John Doe",
    contactPersonTitle: "CEO",
    emailAddress: "example@example.com",
    website: "https://example.com",
    linkedInProfile: "https://www.linkedin.com/in/example",
    phoneNumber: "123-456-7890",
    productServiceType: "Modular Housing",
    briefDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    certifications: "ISO 9001:2015",
    yearsOfExperience: "15",
    previousProjects: "Project A, Project B, Project C",
    specializedExpertise: "Sustainable building practices",
    references: "Available upon request",
    insuranceInfo: "ABC Insurance Company",
    compliance: "Fully compliant",
    paymentTerms: "Net 30",
    paymentMethods: "Credit Card, Wire Transfer",
    collaborationTypes: "Partnerships, Subcontracting",
    geographicAreas: "USA, Canada",
    projectScale: "Small to Large",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div
      className="vendor-signup"
      style={{ height: "100vh", overflow: "hidden" }}
    >
      <Navbar />
      <div
        className="container1 shadow-lg"
        style={{
          height: "500px",
          overflowY: "scroll",
        }}
      >
        <img
          src="https://marketplace.canva.com/EAFuJ5pCLLM/1/0/1600w/canva-black-and-gold-simple-business-man-linkedin-profile-picture-BM_NPo97JwE.jpg"
          alt="person"
          style={{
            height: "150px",
            width: "150px",
            borderRadius: "100%",
            objectFit: "cover",
            marginInline: "auto",
            marginBottom: "20px",
          }}
        />
        <h1 style={{ marginBottom: "20px" }}>Vendor Profile</h1>
        <label>
          Company Name:
          <input
            disabled={!isEditable}
            style={{
              backgroundColor: isEditable
                ? "inherit"
                : "rgba(255, 255, 255, 0.2)",
            }}
            onChange={handleInputChange}
            type="text"
            name="companyName"
            value={formData.companyName}
          />
        </label>
        <label>
          Business Registration Number:
          <input
            disabled={!isEditable}
            style={{
              backgroundColor: isEditable
                ? "inherit"
                : "rgba(255, 255, 255, 0.2)",
            }}
            onChange={handleInputChange}
            type="text"
            name="businessRegistrationNumber"
            value={formData.businessRegistrationNumber}
          />
        </label>
        <label>
          Legal Business Structure:
          <input
            disabled={!isEditable}
            style={{
              backgroundColor: isEditable
                ? "inherit"
                : "rgba(255, 255, 255, 0.2)",
            }}
            onChange={handleInputChange}
            type="text"
            name="legalBusinessStructure"
            value={formData.legalBusinessStructure}
          />
        </label>
        <label>
          Year of Establishment:
          <input
            disabled={!isEditable}
            style={{
              backgroundColor: isEditable
                ? "inherit"
                : "rgba(255, 255, 255, 0.2)",
            }}
            onChange={handleInputChange}
            type="text"
            name="yearOfEstablishment"
            value={formData.yearOfEstablishment}
          />
        </label>

        <label>
          Contact Person's Name:
          <input
            disabled={!isEditable}
            style={{
              backgroundColor: isEditable
                ? "inherit"
                : "rgba(255, 255, 255, 0.2)",
            }}
            onChange={handleInputChange}
            type="text"
            name="contactPersonName"
            value={formData.contactPersonName}
          />
        </label>
        <label>
          Contact Person's Title:
          <input
            disabled={!isEditable}
            style={{
              backgroundColor: isEditable
                ? "inherit"
                : "rgba(255, 255, 255, 0.2)",
            }}
            onChange={handleInputChange}
            type="text"
            name="contactPersonTitle"
            value={formData.contactPersonTitle}
          />
        </label>

        <label>
          Email Address:
          <input
            disabled={!isEditable}
            style={{
              backgroundColor: isEditable
                ? "inherit"
                : "rgba(255, 255, 255, 0.2)",
            }}
            onChange={handleInputChange}
            type="email"
            name="emailAddress"
            value={formData.emailAddress}
            required
          />
        </label>

        <label>
          Company Website:
          <input
            disabled={!isEditable}
            style={{
              backgroundColor: isEditable
                ? "inherit"
                : "rgba(255, 255, 255, 0.2)",
            }}
            onChange={handleInputChange}
            type="text"
            name="website"
            value={formData.website}
          />
        </label>
        <label>
          LinkedIn Profile:
          <input
            disabled={!isEditable}
            style={{
              backgroundColor: isEditable
                ? "inherit"
                : "rgba(255, 255, 255, 0.2)",
            }}
            onChange={handleInputChange}
            type="text"
            name="linkedInProfile"
            value={formData.linkedInProfile}
          />
        </label>
        <label>
          Phone Number:
          <input
            disabled={!isEditable}
            style={{
              backgroundColor: isEditable
                ? "inherit"
                : "rgba(255, 255, 255, 0.2)",
            }}
            onChange={handleInputChange}
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
          />
        </label>

        <label>
          Type of Modular Housing Products/Services Offered:
          <input
            disabled={!isEditable}
            style={{
              backgroundColor: isEditable
                ? "inherit"
                : "rgba(255, 255, 255, 0.2)",
            }}
            onChange={handleInputChange}
            type="text"
            name="productServiceType"
            value={formData.productServiceType}
          />
        </label>
        <label>
          Brief Description of Offerings:
          <textarea
            disabled={!isEditable}
            style={{
              backgroundColor: isEditable
                ? "inherit"
                : "rgba(255, 255, 255, 0.2)",
            }}
            onChange={handleInputChange}
            name="briefDescription"
            value={formData.briefDescription}
          ></textarea>
        </label>
        <label>
          Relevant Certifications or Accreditations:
          <input
            disabled={!isEditable}
            style={{
              backgroundColor: isEditable
                ? "inherit"
                : "rgba(255, 255, 255, 0.2)",
            }}
            onChange={handleInputChange}
            type="text"
            name="certifications"
            value={formData.certifications}
          />
        </label>

        <label>
          Years of Experience in the Industry:
          <input
            disabled={!isEditable}
            style={{
              backgroundColor: isEditable
                ? "inherit"
                : "rgba(255, 255, 255, 0.2)",
            }}
            onChange={handleInputChange}
            type="text"
            name="yearsOfExperience"
            value={formData.yearsOfExperience}
          />
        </label>
        <label>
          Previous Projects or Clients:
          <textarea
            disabled={!isEditable}
            style={{
              backgroundColor: isEditable
                ? "inherit"
                : "rgba(255, 255, 255, 0.2)",
            }}
            onChange={handleInputChange}
            name="previousProjects"
            value={formData.previousProjects}
          ></textarea>
        </label>
        <label>
          Specialized Expertise:
          <input
            disabled={!isEditable}
            style={{
              backgroundColor: isEditable
                ? "inherit"
                : "rgba(255, 255, 255, 0.2)",
            }}
            onChange={handleInputChange}
            type="text"
            name="specializedExpertise"
            value={formData.specializedExpertise}
          />
        </label>

        <label>
          References from Previous Clients or Partners:
          <textarea
            disabled={!isEditable}
            style={{
              backgroundColor: isEditable
                ? "inherit"
                : "rgba(255, 255, 255, 0.2)",
            }}
            onChange={handleInputChange}
            name="references"
            value={formData.references}
          ></textarea>
        </label>

        <label>
          Insurance Information:
          <input
            disabled={!isEditable}
            style={{
              backgroundColor: isEditable
                ? "inherit"
                : "rgba(255, 255, 255, 0.2)",
            }}
            onChange={handleInputChange}
            type="text"
            name="insuranceInfo"
            value={formData.insuranceInfo}
          />
        </label>
        <label>
          Compliance with Local Building Codes and Regulations:
          <input
            disabled={!isEditable}
            style={{
              backgroundColor: isEditable
                ? "inherit"
                : "rgba(255, 255, 255, 0.2)",
            }}
            onChange={handleInputChange}
            type="text"
            name="compliance"
            value={formData.compliance}
          />
        </label>

        <label>
          Preferred Payment Terms:
          <input
            disabled={!isEditable}
            style={{
              backgroundColor: isEditable
                ? "inherit"
                : "rgba(255, 255, 255, 0.2)",
            }}
            onChange={handleInputChange}
            type="text"
            name="paymentTerms"
            value={formData.paymentTerms}
          />
        </label>
        <label>
          Payment Methods Accepted:
          <input
            disabled={!isEditable}
            style={{
              backgroundColor: isEditable
                ? "inherit"
                : "rgba(255, 255, 255, 0.2)",
            }}
            onChange={handleInputChange}
            type="text"
            name="paymentMethods"
            value={formData.paymentMethods}
          />
        </label>

        <label>
          Types of Collaborations:
          <input
            disabled={!isEditable}
            style={{
              backgroundColor: isEditable
                ? "inherit"
                : "rgba(255, 255, 255, 0.2)",
            }}
            onChange={handleInputChange}
            type="text"
            name="collaborationTypes"
            value={formData.collaborationTypes}
          />
        </label>
        <label>
          Geographic Areas Covered:
          <input
            disabled={!isEditable}
            style={{
              backgroundColor: isEditable
                ? "inherit"
                : "rgba(255, 255, 255, 0.2)",
            }}
            onChange={handleInputChange}
            type="text"
            name="geographicAreas"
            value={formData.geographicAreas}
          />
        </label>
        <label>
          Scale of Projects Preferred:
          <input
            disabled={!isEditable}
            style={{
              backgroundColor: isEditable
                ? "inherit"
                : "rgba(255, 255, 255, 0.2)",
            }}
            onChange={handleInputChange}
            type="text"
            name="projectScale"
            value={formData.projectScale}
          />
        </label>

        <button
          style={{
            padding: "6px 16px",
            backgroundColor: "red",
            width: "100%",
            margin: "20px 0",
          }}
          onClick={() => setIsEditable(!isEditable)}
        >
          {isEditable ? "Save" : "Edit"}
        </button>
      </div>
    </div>
  );
};

export default Profile;
