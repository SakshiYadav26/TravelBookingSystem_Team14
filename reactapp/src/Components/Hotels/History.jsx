import React from "react";
// import "./ViewHotel.css"
import FirstImage from "../images/FirstHotelImage.jpg";
import SecondImage from "../images/SecondHotelImage.jpg";
import ThirdImage from "../images/ThirdHotelImage.jpg";
// import Styles from "./ViewHotel.module.css";
const History = () => {
  return (
    <div className="container">
      <div className="row">
        <h4 className="history_heading">Your History</h4>
        <div className={`col-lg-12 card  `}>
          <div className="row">
            {/* Hotel Image */}
            <div className="col-lg-8 mt-3">
              <img src={FirstImage} width="580" height={300} alt="hotel" />
            </div>
            {/* Hotel Details */}
            <div className="col-lg-4 mt-4 mb-3">
              <h5>Your Booking Details</h5>
              <p>Check In Date - 30th May 2023</p>
              <p>Check Out Date - 30th May 2023</p>
              <p>Total Guests - 2 Adults</p>
              <p>Days - 1</p>
              <p>Nights - 2</p>
              <p>Payment Status - Paid</p>
              <button className={` btn btn-sm btn-warning`}>
                Cancel Booking
              </button>
            </div>
          </div>
        </div>

        <div className={`col-lg-12 mt-3 card `}>
          <div className="row">
            {/* Hotel Image */}
            <div className="col-lg-8 mt-3">
              <img src={SecondImage} width="580" height={300} alt="hotel" />
            </div>
            {/* Hotel Details */}
            <div className="col-lg-4 mt-4 mb-3">
              <h5>Your Booking Details</h5>
              <p>Check In Date - 30th May 2023</p>
              <p>Check Out Date - 30th May 2023</p>
              <p>Total Guests - 2 Adults</p>
              <p>Days - 1</p>
              <p>Nights - 2</p>
              <p>Payment Status - Paid</p>
              <button className={` btn btn-sm btn-warning`}>
                Cancel Booking
              </button>
            </div>
          </div>
        </div>

        <div className={`col-lg-12 mt-3 card `}>
          <div className="row">
            {/* Hotel Image */}
            <div className="col-lg-8 mt-3">
              <img src={ThirdImage} width="580" height={300} alt="hotel" />
            </div>
            {/* Hotel Details */}
            <div className="col-lg-4 mt-5">
              <h5>Your Booking Details</h5>
              <p>Check In Date - 30th May 2023</p>
              <p>Check Out Date - 30th May 2023</p>
              <p>Total Guests - 2 Adults</p>
              <p>Days - 1</p>
              <p>Nights - 2</p>
              <p>Payment Status - Paid</p>
              <button className={` btn btn-sm btn-warning`}>
                Cancel Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
