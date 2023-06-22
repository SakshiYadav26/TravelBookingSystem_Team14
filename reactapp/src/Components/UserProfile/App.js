import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserProfile from './usercard';
import UserProfileCard from './profilecard';
import Loginform from './login';


const MainComponent = () => {
  return (
  
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <UserProfileCard />
        </div>
        <div className="col-lg-8">
          <UserProfile />
          <Loginform />
        </div>
      </div>
      </div>
  );
};

export default MainComponent;