import { Link } from "react-router-dom";
import "./Login.css";
function Login() {
  return (
    <div className="login-page">
      <div className="form">
        <h4>SIGN IN</h4>
        <div className="name">
          <label>Your Name</label>
          <input type="text" />
        </div>
        <div className="password">
          <label>Password</label>
          <input type="password" />
        </div>
        <input type="submit" value="SIGN IN" />
        <p className="create">
          Don't have an account?<Link to="/register">Create</Link>
        </p>
      </div>
    </div>
  );
}
export default Login;
