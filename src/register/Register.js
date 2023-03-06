import { Link } from "react-router-dom";
import "./Register.css";
function Register() {
  return (
    <div className="register-page">
      <div className="form">
        <h4>SIGN UP</h4>
        <div className="name">
          <label>Your Name</label>
          <input type="text" />
        </div>
        <div className="email">
          <label>Email</label>
          <input type="email" />
        </div>
        <div className="password">
          <label>Password</label>
          <input type="password" />
        </div>
        <input type="submit" value="SIGN UP" />
        <span>OR</span>
        <div className="links">
          <a href="/#">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="/#">
            <i className="fa-brands fa-google"></i>
          </a>
          <a href="/#">
            <i className="fa-brands fa-apple"></i>
          </a>
        </div>
        <p className="user">
          Already a user? <Link to="/login">LOGIN</Link>
        </p>
      </div>
    </div>
  );
}
export default Register;
