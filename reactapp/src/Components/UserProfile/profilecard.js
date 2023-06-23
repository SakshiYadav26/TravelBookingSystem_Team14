import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';

const UserProfileCard = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [fullName, setFullName] = useState('');  //name variable has to be verified

  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = queryParams.get('email');
        const response = await axios.get(`/api/v1/user?email=${email}`);
        // Replace with the appropriate API endpoint to fetch user data
        setFullName(response.data.fullName);          //name variable has to be verified
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="card-body">
      <div className="row">
        <div className="col-md-7">
          <div className="d-flex flex-column align-items-center text-center" style={{ padding: '20px'}}>
            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150"  marginBottom= '10px'  marginLeft='150px'/>
            <div className="mt-3" >
              <div className="names" style={{ fontsize: '30px' ,marginBottom: '10px'}}>
                <h4>{fullName}</h4>
              </div>
              <div className="d-flex flex-column align-items-center text-center">
                <div className="row" style={{ marginBottom: '10px'}}>
                  <div className="col">
                    <button className="btn btn-outline-primary btn-lg btn-block" style={{ fontSize: '30px', width: '250px' , marginLeft:'auto', marginRight:'auto'}}>User Profile</button>
                  </div>
                </div>
                <div className="row" style={{ marginBottom: '10px'}}>
                  <div className="col ">
                    <button className="btn btn-outline-primary btn-lg btn-block" style={{fontSize: '30px', width: '250px',marginLeft:'auto', marginRight:'auto' }}>Login Details</button>
                  </div>
                </div>
                <div className="row" style={{ marginBottom: '10px'}}>
                  <div className="col">
                    <button className="btn btn-outline-primary btn-lg btn-block" style={{ fontSize: '30px', width: '250px',marginLeft:'auto', marginRight:'auto'}}>Booking History</button>
                  </div>
                </div>
                <div className="row" style={{ marginBottom: '10px'}}>
                  <div className="col">
                    <button className="btn btn-outline-primary btn-lg btn-block" style={{ fontSize: '30px', width: '250px',marginLeft:'auto', marginRight:'auto' }}>Logout</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          {/* Rest of the content */}
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
