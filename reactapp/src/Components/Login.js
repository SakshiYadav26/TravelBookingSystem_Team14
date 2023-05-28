import "./login.css";
function Login() {
  return (
    <div class="wrapper">
      <div class="container main">
        <div class="row">
          <div class="col-md-6 side-image">
            <img src="/images/7.webp" alt="flight " />
            <div class="text">
              <p>
                Join the community of Travellers! <i>- Travelista</i>
              </p>
            </div>
          </div>
          <div class="col-md-6 right">
            <div class="input-box">
              <header>Login</header>
              <div class="input-field">
                <input
                  type="text"
                  class="input"
                  id="email"
                  required
                  autocomplete="off"
                />
                <label for="email">Email</label>
              </div>
              <div class="input-field">
                <input type="password" class="input" id="password" required />
                <label for="password">Password</label>
              </div>
              <div class="input-field">
                <input type="submit" class="submit" value="Login" />
              </div>
              <div class="signup">
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
