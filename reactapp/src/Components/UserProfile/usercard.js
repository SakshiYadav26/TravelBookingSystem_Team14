import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';

const UserProfile = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = queryParams.get('email')
        // const response = await axios.get('/api/v1/user?email=${email}'); 
        const response = await axios.get(`/api/v1/user?email=${email}`);
// Replace with the appropriate API endpoint to fetch user data
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="card mb-3">
      <button type="button" className="btn btn-primary" style={{ fontSize: '30px' }}>
        User Profile <span className="badge badge-light"></span>
      </button>
      <div className="card-body">
        {userData ? (
          <>
           <div className="card-body">
      
      <div className="row" style={{fontSize:'20px'}}>
        <div className="col-sm-3">
          <h6 className="mb-0"  style={{fontSize:'20px'}}>Full Name</h6>
        </div>

        {/* variable name has to be verified */}
        <div className="col-sm-9 text-secondary">   
          {userData.fullname}           
        </div>
      </div>
      <hr />
      <div className="row" style={{fontSize:'20px'}}>
        <div className="col-sm-3">
          <h6 className="mb-0"  style={{fontSize:'20px'}}>Email</h6>
        </div>
        <div className="col-sm-9 text-secondary" >
          {userData.email}
        </div>
      </div>
      <hr />
      <div className="row"  style={{fontSize:'20px'}}>
        <div className="col-sm-3">
          <h6 className="mb-0" >Phone</h6>
        </div>
        <div className="col-sm-9 text-secondary" >
          {userData.phone}
        </div>
      </div>
      <hr />
      <div className="row"  style={{fontSize:'20px'}}>
        <div className="col-sm-3">
          <h6 className="mb-0">Age </h6>
        </div>
        <div className="col-sm-9 text-secondary" >
          {userData.age}
        </div>
      </div>
      <hr />
      <div className="row"  style={{fontSize:'20px'}}>
        <div className="col-sm-3">
          <h6 className="mb-0">Gender</h6>
        </div>
        <div className="col-sm-9 text-secondary">
          {userData.gender}
        </div>
      </div>
      <hr />
      
      <div className="row"  style={{fontSize:'20px'}}>
        <div className="col-sm-3">
          <h6 className="mb-0">Address</h6>
        </div>
        <div className="col-sm-9 text-secondary" >
          {userData.address}
        </div>
      </div>
      <hr />
      <div className="row"  style={{fontSize:'20px'}}>
        <div className="col-sm-3">
          <h6 className="mb-0">City</h6>
        </div>
        <div className="col-sm-9 text-secondary">
          {userData.city}
        </div>
      </div>
      <hr />
      <div className="row"  style={{fontSize:'20px'}}>
        <div className="col-sm-3">
          <h6 className="mb-0">State</h6>
        </div>
        <div className="col-sm-9 text-secondary" >
          {userData.state}
        </div>
      </div>
      <hr />
      <div className="row"  style={{fontSize:'20px'}}>
        <div className="col-sm-3">
          <h6 className="mb-0" >Pincode</h6>
        </div>
        <div className="col-sm-9 text-secondary"  >
          {userData.pincode}
        </div>
      </div>
      <hr />
      
      <div className="row"  style={{fontSize:'20px'}}>
        <div className="col-sm-12">
          <a className="btn btn-info" target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit</a>
        </div>
      </div>
    </div>
            
          </>
        ) : (
          <div>Loading user data...</div>
        )}
        {/* Add the remaining HTML code */}
      </div>
    </div>
  );
};

export default UserProfile;
