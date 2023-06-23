import React, { useEffect, useState } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Loginform = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = queryParams.get('email');
        const response = await axios.get(`/api/v1/user?email=${email}`);
        const userData = response.data;

        setUsername(userData.username);
        setEmail(userData.email);
        setPassword(userData.password);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="card mb-3">
      <button type="button" className="btn btn-primary" style={{ fontSize: '30px' }}>
        Login Details <span className="badge badge-light"></span>
      </button>
      <div className="card-body">
        <div className="row" style={{ fontSize: '20px' }}>
          <div className="col-sm-3">
            <h6 className="mb-0" style={{ fontSize: '20px' }}>
              UserName
            </h6>
          </div>
          <div className="col-sm-9 text-secondary">{username}</div>
        </div>
        <hr />
        <div className="row" style={{ fontSize: '20px' }}>
          <div className="col-sm-3">
            <h6 className="mb-0" style={{ fontSize: '20px' }}>
              Email
            </h6>
          </div>
          <div className="col-sm-9 text-secondary">{email}</div>
        </div>
        <hr />
        <div className="row" style={{ fontSize: '20px' }}>
          <div className="col-sm-3">
            <h6 className="mb-0">Password</h6>
          </div>
          <div className="col-sm-9 text-secondary">{password}</div>
        </div>
        <hr />
        <div className="row" style={{ fontSize: '20px' }}>
          <div className="col-sm-12">
            <a className="btn btn-info" target="__blank" href="">
              Change Password
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginform;
