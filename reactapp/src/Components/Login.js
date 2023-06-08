import "./login.css";
function Login() {
  return (
    <div className="wrapper">
      <div className="container main">
        <div className="row">
          <div className="col-md-6 side-image">
            <img src="/images/7.webp" alt="flight " />
            <div className="text">
              <p>
                Join the community of Travellers! <i>- Travelista</i>
              </p>
            </div>
          </div>
          <div className="col-md-6 right">
            <div className="input-box">
              <header>Login</header>
              <div className="input-field">
                <input
                  type="text"
                  className="input"
                  id="email"
                  required
                  autocomplete="off"
                />
                <label for="email">Email</label>
              </div>
              <div className="input-field">
                <input type="password" className="input" id="password" required />
                <label for="password">Password</label>
              </div>
              <div className="input-field">
                <input type="submit" className="submit" value="Login" />
              </div>
              <div className="signup">
                <span>
                  {" "}
                  Don't have an account? <a href="#"> Register here </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
