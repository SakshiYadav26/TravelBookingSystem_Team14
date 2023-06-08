import React from 'react';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const UserProfile = () => {
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
            Kenneth Valdez
          </div>
        </div>
        <hr />
        <div className="row" style={{fontsize:'20px'}}>
          <div className="col-sm-3">
            <h6 className="mb-0"  style={{fontsize:'20px'}}>Email</h6>
          </div>
          <div className="col-sm-9 text-secondary" >
            abc@xyz.com
          </div>
        </div>
        <hr />
        <div className="row"  style={{fontsize:'20px'}}>
          <div className="col-sm-3">
            <h6 className="mb-0" >Phone</h6>
          </div>
          <div className="col-sm-9 text-secondary" >
            (239) 816-9029
          </div>
        </div>
        <hr />
        <div className="row"  style={{fontsize:'20px'}}>
          <div className="col-sm-3">
            <h6 className="mb-0">Age </h6>
          </div>
          <div className="col-sm-9 text-secondary" >
            XX
          </div>
        </div>
        <hr />
        <div className="row"  style={{fontsize:'20px'}}>
          <div className="col-sm-3">
            <h6 className="mb-0">Gender</h6>
          </div>
          <div className="col-sm-9 text-secondary">
            M
          </div>
        </div>
        <hr />
        <div className="row"  style={{fontsize:'20px'}}>
          <div className="col-sm-3">
            <h6 className="mb-0">Phone</h6>
          </div>
          <div className="col-sm-9 text-secondary"  >
            (239) 816-9029
          </div>
        </div>
        <hr />
        <div className="row"  style={{fontsize:'20px'}}>
          <div className="col-sm-3">
            <h6 className="mb-0">Address</h6>
          </div>
          <div className="col-sm-9 text-secondary" >
            4th Cross, 
          </div>
        </div>
        <hr />
        <div className="row"  style={{fontsize:'20px'}}>
          <div className="col-sm-3">
            <h6 className="mb-0">City</h6>
          </div>
          <div className="col-sm-9 text-secondary">
            Dallas
          </div>
        </div>
        <hr />
        <div className="row"  style={{fontsize:'20px'}}>
          <div className="col-sm-3">
            <h6 className="mb-0">State</h6>
          </div>
          <div className="col-sm-9 text-secondary" >
            Texas
          </div>
        </div>
        <hr />
        <div className="row"  style={{fontsize:'20px'}}>
          <div className="col-sm-3">
            <h6 className="mb-0" >Pincode</h6>
          </div>
          <div className="col-sm-9 text-secondary"  >
            XXXXX
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
