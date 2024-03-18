import React, { useState } from 'react';
import './VendorRegistration.css';

const VendorRegistration = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    businessRegistrationNumber: '',
    legalBusinessStructure: '',
    yearOfEstablishment: '',
    contactPersonName: '',
    contactPersonTitle: '',
    businessAddress: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phoneNumber: '',
    emailAddress: '',
    website: '',
    linkedInProfile: '',
    otherSocialMedia: '',
    productServiceType: '',
    briefDescription: '',
    certifications: '',
    yearsOfExperience: '',
    previousProjects: '',
    specializedExpertise: '',
    references: '',
    insuranceInfo: '',
    compliance: '',
    paymentTerms: '',
    paymentMethods: '',
    collaborationTypes: '',
    geographicAreas: '',
    projectScale: '',
    attachments: [],
    termsAndConditions: false,
    optInNewsletter: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData({
      ...formData,
      attachments: files,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className='container1'>
      <h2>Vendor Registration</h2>
      <form onSubmit={handleSubmit}>
        <h3>Company Information:</h3>
        <label>
          Company Name:
          <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} />
        </label>
        <label>
          Business Registration Number:
          <input type="text" name="businessRegistrationNumber" value={formData.businessRegistrationNumber} onChange={handleChange} />
        </label>
        <label>
          Legal Business Structure:
          <input type="text" name="legalBusinessStructure" value={formData.legalBusinessStructure} onChange={handleChange} />
        </label>
        <label>
          Year of Establishment:
          <input type="text" name="yearOfEstablishment" value={formData.yearOfEstablishment} onChange={handleChange} />
        </label>

        <h3>Contact Information:</h3>
        <label>
          Contact Person's Name:
          <input type="text" name="contactPersonName" value={formData.contactPersonName} onChange={handleChange} />
        </label>
        <label>
          Contact Person's Title:
          <input type="text" name="contactPersonTitle" value={formData.contactPersonTitle} onChange={handleChange} />
        </label>
        
        <h3>Website and Social Media:</h3>
        <label>
          Company Website:
          <input type="text" name="website" value={formData.website} onChange={handleChange} />
        </label>
        <label>
          LinkedIn Profile:
          <input type="text" name="linkedInProfile" value={formData.linkedInProfile} onChange={handleChange} />
        </label>
        <label>
          Other Relevant Social Media Profiles:
          <input type="text" name="otherSocialMedia" value={formData.otherSocialMedia} onChange={handleChange} />
        </label>
       
        <h3>Product/Service Details:</h3>
        <label>
          Type of Modular Housing Products/Services Offered:
          <input type="text" name="productServiceType" value={formData.productServiceType} onChange={handleChange} />
        </label>
        <label>
          Brief Description of Offerings:
          <textarea name="briefDescription" value={formData.briefDescription} onChange={handleChange}></textarea>
        </label>
        <label>
          Relevant Certifications or Accreditations:
          <input type="text" name="certifications" value={formData.certifications} onChange={handleChange} />
        </label>
        
        <h3>Experience and Expertise:</h3>
        <label>
          Years of Experience in the Industry:
          <input type="text" name="yearsOfExperience" value={formData.yearsOfExperience} onChange={handleChange} />
        </label>
        <label>
          Previous Projects or Clients:
          <textarea name="previousProjects" value={formData.previousProjects} onChange={handleChange}></textarea>
        </label>
        <label>
          Specialized Expertise:
          <input type="text" name="specializedExpertise" value={formData.specializedExpertise} onChange={handleChange} />
        </label>
       
        <h3>References:</h3>
        <label>
          References from Previous Clients or Partners:
          <textarea name="references" value={formData.references} onChange={handleChange}></textarea>
        </label>
        
        <h3>Insurance and Compliance:</h3>
        <label>
          Insurance Information:
          <input type="text" name="insuranceInfo" value={formData.insuranceInfo} onChange={handleChange} />
        </label>
        <label>
          Compliance with Local Building Codes and Regulations:
          <input type="text" name="compliance" value={formData.compliance} onChange={handleChange} />
        </label>
        
        <h3>Payment Information:</h3>
        <label>
          Preferred Payment Terms:
          <input type="text" name="paymentTerms" value={formData.paymentTerms} onChange={handleChange} />
        </label>
        <label>
          Payment Methods Accepted:
          <input type="text" name="paymentMethods" value={formData.paymentMethods} onChange={handleChange} />
        </label>
        
        <h3>Collaboration Preferences:</h3>
        <label>
          Types of Collaborations:
          <input type="text" name="collaborationTypes" value={formData.collaborationTypes} onChange={handleChange} />
        </label>
        <label>
          Geographic Areas Covered:
          <input type="text" name="geographicAreas" value={formData.geographicAreas} onChange={handleChange} />
        </label>
        <label>
          Scale of Projects Preferred:
          <input type="text" name="projectScale" value={formData.projectScale} onChange={handleChange} />
        </label>
        
        <h3>Attachments:</h3>
        <input type="file" onChange={handleFileUpload} multiple />
        
        <h3>Terms and Conditions:</h3>
        <label>
          <input type="checkbox" name="termsAndConditions" checked={formData.termsAndConditions} onChange={handleCheckboxChange} />
          Acceptance of Terms and Conditions for Vendor Partnership
        </label>
        
        <h3>Opt-In for Communications:</h3>
        <label>
          <input type="checkbox" name="optInNewsletter" checked={formData.optInNewsletter} onChange={handleCheckboxChange} />
          Opt-In for Newsletters or Updates (if applicable)
          </label>
          <button className='button-item-new' type="submit">Submit</button>
      </form>
   </div>
   );
 };
 export default VendorRegistration;
