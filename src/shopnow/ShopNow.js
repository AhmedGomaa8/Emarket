import { Link } from "react-router-dom";
import newImg from "../imgs/h1-img-3.jpg";
import saleImg from "../imgs/h1-img-4.jpg";
import "./ShopNow.css";
function ShopNow() {
  return (
    <div className="shop-now">
      <div className="box">
        <div className="img">
          <img src={newImg} alt="" />
        </div>
        <div className="link">
          <h3>new</h3>
          <Link to="/products">shop now</Link>
        </div>
      </div>
      <div className="box">
        <div className="img">
          <img src={saleImg} alt="" />
        </div>
        <div className="link">
          <h3>sale</h3>
          <Link to="/products">shop now</Link>
        </div>
      </div>
    </div>
  );
}
export default ShopNow;
