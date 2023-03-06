import { Link } from "react-router-dom";
import "./Landing.css";
function Landing() {
  return (
    <div className="landing">
      <div className="caption ">
        <h1>NEW SEASON ARRIIVALS</h1>
        <p>CHECK OUT ALL THE TRENDS</p>
        <Link to="/products">Discover Now</Link>
      </div>
    </div>
  );
}
export default Landing;
