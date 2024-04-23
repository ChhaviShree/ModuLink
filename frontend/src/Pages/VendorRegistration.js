import React, { useState } from 'react';
import './VendorRegistration.css';
import Navbar from "../Components/Navbar/Navbar";

const VendorRegistration = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    businessRegistrationNumber: '',
    legalBusinessStructure: '',
    yearOfEstablishment: '',
    contactPersonName: '',
    contactPersonTitle: '',
    businessAddress: '',
    country: '',
    phoneNumber: '',
    emailAddress: '',
    password:'',
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
    
  });
  const [formErrors, setFormErrors] = useState({});

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

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleNextStep = () => {
    if (step <13) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('https://modular-house.vercel.app/vendors/vendor-register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        setLoading(false);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('Registration Successful:', data);
      setLoading(false);
    } catch (error) {
      console.error('Error:', error.message);
      setLoading(false);
    }
  };
  
  return (
    <div className='vendor-signup'>
      <Navbar menu={"blogs"}/>
    <div className='container1'>
     <h2>Vendor Registration</h2>
     <div className='progress-bar'>
       <div className={`step ${step === 1 ? 'active' : ''}`}>
         <p>Company Information</p>
       </div>
       <div className={`step ${step === 2 ? 'active' : ''}`}>
         <p>Contact Information</p>
       </div>
       <div className={`step ${step === 3 ? 'active' : ''}`}>
         <p>Website and Social Media</p>
       </div>
       <div className={`step ${step === 4 ? 'active' : ''}`}>
         <p>Product/Service Details</p>
       </div>
       <div className={`step ${step === 5 ? 'active' : ''}`}>
         <p>Additional Informations</p>
       </div>
     </div>
     <form onSubmit={handleSubmit}>
       <div className={`page ${step === 1 ? 'active' : ''}`}>
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
       </div>
       <div className={`page ${step === 2 ? 'active' : ''}`}>
         <h3>Contact Information:</h3>
         <label>
           Contact Person's Name:
           <input type="text" name="contactPersonName" value={formData.contactPersonName} onChange={handleChange} />
         </label>
         <label>
           Contact Person's Title:
           <input type="text" name="contactPersonTitle" value={formData.contactPersonTitle} onChange={handleChange} />
         </label>
         
       </div>
       <div className={`page ${step === 3 ? 'active' : ''}`}>
       <h3>Email Address:</h3>
         <label>
           Email Address:
           <input
             type="email"
             name="emailAddress"
             value={formData.emailAddress}
             onChange={handleChange}
             required
           />
         </label>
         <h3>Password:</h3>
         <label>
           Password:
           <input
             type="password"
             name="password"
             value={formData.password}
             onChange={handleChange}
             pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
             required
           />
          <div className="password-requirement">
               (Attention! Password:-)
               <ul className="password-requirement-list">
                 <li> must contain atleast one letter</li>
                 <li> must contain atleast one number</li>
                 <li> must be minimum 6 characters long</li>
               </ul>
           </div>
         </label>
       </div>
       <div className={`page ${step === 4 ? 'active' : ''}`}>
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
             Phone Number:
             <input type="number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
         </label>
         
       </div>
       <div className={`page ${step === 5 ? 'active' : ''}`}>
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
         
       </div>
       <div className={`page ${step === 6 ? 'active' : ''}`}>
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
       </div>
       <div className={`page ${step === 7 ? 'active' : ''}`}>
         <h3>References:</h3>
         <label>
           References from Previous Clients or Partners:
           <textarea name="references" value={formData.references} onChange={handleChange}></textarea>
         </label>
       </div>
       <div className={`page ${step === 8 ? 'active' : ''}`}>
         <h3>Insurance and Compliance:</h3>
         <label>
           Insurance Information:
           <input type="text" name="insuranceInfo" value={formData.insuranceInfo} onChange={handleChange} />
         </label>
         <label>
           Compliance with Local Building Codes and Regulations:
           <input type="text" name="compliance" value={formData.compliance} onChange={handleChange} />
         </label>
       </div>
       <div className={`page ${step === 9 ? 'active' : ''}`}>
         <h3>Payment Information:</h3>
         <label>
           Preferred Payment Terms:
           <input type="text" name="paymentTerms" value={formData.paymentTerms} onChange={handleChange} />
         </label>
         <label>
           Payment Methods Accepted:
           <input type="text" name="paymentMethods" value={formData.paymentMethods} onChange={handleChange} />
         </label>
       </div>
       <div className={`page ${step === 10 ? 'active' : ''}`}>
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
       </div>
       <div className={`page ${step === 11 ? 'active' : ''}`}>
         <h3>Attachments:</h3>
         <input type="file" onChange={handleFileUpload} multiple />
       </div>
       <div className={`page ${step === 12 ? 'active' : ''}`}>
         <h3>Terms and Conditions:</h3>
         <label>
           <input type="checkbox" name="termsAndConditions" checked={formData.termsAndConditions} onChange={handleCheckboxChange} />
           Acceptance of Terms and Conditions for Vendor Partnership
         </label>
       </div>
       <div className={`page ${step === 13 ? 'active' : ''}`}>
         <h3>Opt-In for Communications:</h3>
         <label>
           <input type="checkbox" name="optInNewsletter" checked={formData.optInNewsletter} onChange={handleCheckboxChange} />
           Opt-In for Newsletters or Updates (if applicable)
         </label>
       </div>
       <div className='btn-group-1'>
         {step > 1 && (
           <button type='button' className='btn-3' onClick={handlePrevStep}>prev</button>
         )}
         {step < 12 ? (
           <button type='button' className='btn-3' onClick={handleNextStep}>Next</button>
         ) : (
           <button className='sub' type='submit'>Submit</button>
         )}
       </div>
     </form>
     </div>
    </div>
    
);
    
};

export default VendorRegistration;
