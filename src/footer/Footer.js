import logo from "../imgs/logo.png";
import cc from "../imgs/creditcard.png";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-5">
            <div className="newsletter">
              <h3>Subscribe to our newsletter</h3>
              <p>
                be the first to know about our newest arrivals, special offers
                and store events near you.
              </p>
              <form>
                <input
                  className="input"
                  type="email"
                  placeholder="Enter your Email"
                />
                <input className="submit" type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="links">
              <h6>CUSTOMER SERVICE</h6>
              <ul>
                <li>
                  <a href="/#">Privacy Policy</a>
                </li>
                <li>
                  <a href="/#">Delivery And Returns</a>
                </li>
                <li>
                  <a href="/#">Terms of Service</a>
                </li>
                <li>
                  <a href="/#">Refund policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="links">
              <h6>ABOUT</h6>
              <ul>
                <li>
                  <a href="/#">About Emarket</a>
                </li>
                <li>
                  <a href="/#">Our Branches</a>
                </li>
                <li>
                  <a href="/#">How To Purchase</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="contact">
              <h6>CONTACT US</h6>
              <span>
                <i className="fa-solid fa-location-dot"></i> Cairo, Egypt
              </span>
              <span>
                <i className="fa-solid fa-envelope"></i> emarket@mail.com
              </span>
              <span>
                <i className="fa-solid fa-phone"></i> +0123456789
              </span>
            </div>
          </div>
          <div className="rights">
            <div className="left">
              <img className="logo" src={logo} alt="" />
              <p> &#169;Emarket 2023. All Rights Reserved.</p>
            </div>
            <div className="right">
              <img className="cc" src={cc} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
