import React from 'react';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Loginform = () => {
  return (
   
    <div className="card mb-3">
        <button type="button" class="btn btn-primary" style={{fontSize:'30px'}}>
  Login Details <span class="badge badge-light"></span>
  
</button>
      <div className="card-body">
      
        <div className="row" style={{fontsize:'20px'}}>
          <div className="col-sm-3">
            <h6 className="mb-0"  style={{fontsize:'20px'}}>UserName</h6>
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
            <h6 className="mb-0" >Passwprd</h6>
          </div>
          <div className="col-sm-9 text-secondary" >
            *********
          </div>
        </div>
       
        <hr />
        
        <div className="row"  style={{fontsize:'20px'}}>
          <div className="col-sm-12">
            <a className="btn btn-info" target="__blank" href="">Change Password</a>
          </div>
        </div>
      </div>
    </div>
    

    
        
  );
};

export default Loginform;
