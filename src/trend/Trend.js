import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../rtk/slices/cart-slice";
import { productToDetails } from "../rtk/slices/productdetails-slice";
import { fetchProducts } from "../rtk/slices/products-slice";
import "./Trend.css";

function Trend() {
  let dispatch = useDispatch();

  let products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div className="trending">
      <div className="container">
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
          Trending Products
        </h2>
        <div className="trending-products">
          {products.map((product) => {
            return product.id <= 5 ? (
              <div key={product.id} className="product-card">
                <i className="fire fa-solid fa-fire"></i>
                <img src={product.image} alt="" />
                <p>{product.category}</p>
                <h3>{product.title.slice(0, 20)}</h3>
                <span>
                  ${product.price}{" "}
                  <del>${(product.price + 50).toFixed(0, 20)}</del>
                </span>
                <button
                  onClick={() => dispatch(addToCart(product))}
                  className="add"
                >
                  <i className="fa-solid fa-plus"></i>
                </button>
                <Link
                  onClick={() => dispatch(productToDetails(product))}
                  to={`/products/details/${product.id}`}
                  className="details"
                >
                  <i className="fa-solid fa-eye"></i>
                </Link>
              </div>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
}
export default Trend;
