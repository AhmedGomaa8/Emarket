import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import logo from "../imgs/logo.png";
import {
  addToCart,
  clearAll,
  decreaseQuantity,
  deleteFromCart,
} from "../rtk/slices/cart-slice";
import "./Navbar.css";
function Navbar() {
  let [state, setState] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 350) {
      setState(true);
    } else {
      setState(false);
    }
  });
  let dispatch = useDispatch();
  let [active, setActive] = useState(false);
  let cart = useSelector((state) => state.cart.cartArr);

  let totalPrice = cart.reduce((acc, el) => {
    return acc + el.price * el.quantity;
  }, 0);

  return (
    <div
      className={
        state ? "navbar sticky-nav navbar-expand-lg" : "navbar navbar-expand-lg"
      }
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={active ? "cart-products active" : "cart-products"}>
          <div className="cart-head">
            <span>SHOPPING BAG {`(${cart.length})`}</span>
            <button className="closeBtn" onClick={() => setActive(false)}>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div className="total">
            <h5>Total Price: ${totalPrice.toFixed(2)}</h5>
            {cart.length > 0 ? (
              <button onClick={() => dispatch(clearAll())}>Clear All</button>
            ) : null}
          </div>
          {cart.length === 0 ? (
            <div className="empty">
              <h3>Your cart is empty.</h3>{" "}
              <Link onClick={() => setActive(false)} to="/products">
                RETURN TO SHOP
              </Link>
            </div>
          ) : null}
          {cart.map((product) => {
            return (
              <div key={product.id} className="cart-product">
                <div className="left-info">
                  <div className="img">
                    <img
                      style={{ width: "65px", height: "65px" }}
                      src={product.image}
                      alt=""
                    />
                  </div>
                  <div className="mid-info">
                    <h6
                      style={{
                        paddingRight: "10px",
                        fontSize: "14px",
                        marginBottom: "15px",
                      }}
                    >
                      {product.title}
                    </h6>
                    <div className="quantity">
                      <div className="action">
                        <button
                          onClick={() =>
                            product.quantity > 1
                              ? dispatch(decreaseQuantity(product))
                              : dispatch(deleteFromCart(product))
                          }
                        >
                          -
                        </button>
                        <span>{product.quantity}</span>
                        <button onClick={() => dispatch(addToCart(product))}>
                          +
                        </button>
                      </div>
                      <p>${product.price}</p>
                      <span>
                        ${(product.quantity * product.price).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="right-info">
                  <button onClick={() => dispatch(deleteFromCart(product))}>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="right-links">
          <Link to="/login">Sign In</Link>
          <Link to="/register">Regiser</Link>

          <i
            onClick={() => setActive(true)}
            className="cart fa-solid fa-bag-shopping"
          >
            {cart.length > 0 ? (
              <div className="cart-nums">{cart.length}</div>
            ) : null}
          </i>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
