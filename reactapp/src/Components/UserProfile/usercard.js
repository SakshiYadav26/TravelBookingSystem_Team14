import React from 'react';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';

const UserProfile = () => {
  const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
  
    const fullName = queryParams.get('fullName');
    const email = queryParams.get('email');
    const phone = queryParams.get('phone');
    const age = queryParams.get('age');
    const gender = queryParams.get('gender');
    const address = queryParams.get('address');
    const city = queryParams.get('city');
    const state = queryParams.get('state');
    const pincode = queryParams.get('pincode');
  return (
   
    <div className="card mb-3">
        <button type="button" class="btn btn-primary" style={{fontSize:'30px'}}>
  User Profile <span class="badge badge-light"></span>
  
</button>
      <div className="card-body">
      
        <div className="row" style={{fontsize:'20px'}}>
          <div className="col-sm-3">
            <h6 className="mb-0"  style={{fontsize:'20px'}}>Full Name</h6>
          </div>
          <div className="col-sm-9 text-secondary">
            {fullName}
          </div>
        </div>
        <hr />
        <div className="row" style={{fontsize:'20px'}}>
          <div className="col-sm-3">
            <h6 className="mb-0"  style={{fontsize:'20px'}}>Email</h6>
          </div>
          <div className="col-sm-9 text-secondary" >
            {email}
          </div>
        </div>
        <hr />
        <div className="row"  style={{fontsize:'20px'}}>
          <div className="col-sm-3">
            <h6 className="mb-0" >Phone</h6>
          </div>
          <div className="col-sm-9 text-secondary" >
            {phone}
          </div>
        </div>
        <hr />
        <div className="row"  style={{fontsize:'20px'}}>
          <div className="col-sm-3">
            <h6 className="mb-0">Age </h6>
          </div>
          <div className="col-sm-9 text-secondary" >
            {age}
          </div>
        </div>
        <hr />
        <div className="row"  style={{fontsize:'20px'}}>
          <div className="col-sm-3">
            <h6 className="mb-0">Gender</h6>
          </div>
          <div className="col-sm-9 text-secondary">
            {gender}
          </div>
        </div>
        <hr />
        
        <div className="row"  style={{fontsize:'20px'}}>
          <div className="col-sm-3">
            <h6 className="mb-0">Address</h6>
          </div>
          <div className="col-sm-9 text-secondary" >
            {address}
          </div>
        </div>
        <hr />
        <div className="row"  style={{fontsize:'20px'}}>
          <div className="col-sm-3">
            <h6 className="mb-0">City</h6>
          </div>
          <div className="col-sm-9 text-secondary">
            {city}
          </div>
        </div>
        <hr />
        <div className="row"  style={{fontsize:'20px'}}>
          <div className="col-sm-3">
            <h6 className="mb-0">State</h6>
          </div>
          <div className="col-sm-9 text-secondary" >
            {state}
          </div>
        </div>
        <hr />
        <div className="row"  style={{fontsize:'20px'}}>
          <div className="col-sm-3">
            <h6 className="mb-0" >Pincode</h6>
          </div>
          <div className="col-sm-9 text-secondary"  >
            {pincode}
          </div>
        </div>
        <hr />
        
        <div className="row"  style={{fontsize:'20px'}}>
          <div className="col-sm-12">
            <a className="btn btn-info" target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit</a>
          </div>
        </div>
      </div>
    </div>
    

    
        
  );
};

export default UserProfile;
