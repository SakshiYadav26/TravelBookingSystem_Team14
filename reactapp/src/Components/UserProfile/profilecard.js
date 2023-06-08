import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserProfileCard = () => {
  return (
    // <div className="card a">
   
  <div className="card-body">
    <div className="row">
      <div className="col-md-7">
        <div className="d-flex flex-column align-items-center text-center" style={{ padding: '20px'}}>
          <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150"  marginBottom= '10px'  marginLeft='150px'/>
          <div className="mt-3" >
            <div class ="names" style={{ fontsize: '30px' ,marginBottom: '10px'}}>
            <h4>John Doe</h4> </div>
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

 


//     <div className="card">
//       <div className="card-body">
//         <div className="d-flex flex-column align-items-center text-center" style={{ padding: '20px' }}>
//           <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150" align ="centre" />
//           <div className="mt-3">
//             <h4>John Doe</h4>
//             <div className="d-flex flex-column align-items-center text-center">
//   <div className="row" style={{marginbottom: '10px'}}>
//     <div className="col">
//       <button className="btn btn-outline-primary btn-lg btn-block" style={{fontSize:"20px"}} >User Profile</button>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col">
//       <button className="btn btn-outline-primary btn-lg btn-block" style={{fontSize:"20px"}}>Login Details</button>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col">
//       <button className="btn btn-outline-primary btn-lg btn-block" style={{fontSize:"20px"}}>Booking History</button>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col">
//       <button className="btn btn-outline-primary btn-lg btn-block" style={{fontSize:"20px"}}>Logout</button>
//     </div>
//   </div>
// </div>

//           </div>
//         </div>
//       </div>
//     </div>
  );
};

export default UserProfileCard;
