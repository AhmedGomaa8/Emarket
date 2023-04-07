import "./Discount.css";
import img from "../imgs/h1-background-2.jpg";
function Discount() {
  return (
    <div className="discount">
      <div className="container">
        <div className="content">
          <img style={{ width: "100%" }} src={img} alt="" />
          <div className="text">
            <p>
              This summer <span>sale go</span>
            </p>
            <p>
              This summer <span>up to 50%</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Discount;
