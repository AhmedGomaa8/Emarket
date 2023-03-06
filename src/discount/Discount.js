import { Link } from "react-router-dom";
import "./Discount.css";
function Discount() {
  return (
    <div className="discount">
      <div className="text">
        <h1>
          Summer Discounts Up To <span>50%</span>
        </h1>
        <Link to="/products">Shop Now</Link>
      </div>
    </div>
  );
}
export default Discount;
