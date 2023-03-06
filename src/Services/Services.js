import "./Services.css";
function Services() {
  return (
    <div className="services">
      <div className="boxs">
        <div className="box">
          <i className="fa-solid fa-truck-fast"></i>
          <div className="text">
            <h6>Free Shipping</h6>
            <p>From all orders over $100</p>
          </div>
        </div>
        <div className="box">
          <i className="fa-solid fa-gift"></i>
          <div className="text">
            <h6>Daily Surprise Offers</h6>
            <p>Save up to %25 off</p>
          </div>
        </div>
        <div className="box">
          <i className="fa-solid fa-headset"></i>
          <div className="text">
            <h6>Support 24/7</h6>
            <p>Shop with an expert</p>
          </div>
        </div>
        <div className="box">
          <i className="fa-solid fa-percent"></i>
          <div className="text">
            <h6>Affordable Prices</h6>
            <p>Get Factory direct Price</p>
          </div>
        </div>
        <div className="box">
          <i className="fa-solid fa-credit-card"></i>
          <div className="text">
            <h6>Secure Payments</h6>
            <p>%100 Protected Payments</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Services;
