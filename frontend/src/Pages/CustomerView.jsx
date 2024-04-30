import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Customerview = () => {
  const [vendors, setVendors] = useState([]);
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllVendors = async () => {
      try {
        const response = await axios.get('https://modu-link.vercel.appvendors/all-vendor-details');
        setVendors(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching vendors:', error);
        setLoading(false);
      }
    };
    fetchAllVendors();
  }, []);

  const handleSelectVendor = (vendor) => {
    setSelectedVendor(vendor);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>All Vendors</h2>
      <ul>
        {vendors.map((vendor) => (
          <li key={vendor._id} onClick={() => handleSelectVendor(vendor)}>
            {vendor.companyName}
          </li>
        ))}
      </ul>
      {selectedVendor && (
        <div>
          <h3>Selected Vendor Details</h3>
          <p>Company Name: {selectedVendor.companyName}</p>
          <p>Contact Person: {selectedVendor.contactPersonName}</p>
          {/* Display other vendor details as needed */}
        </div>
      )}
    </div>
  );
};

export default Customerview;
