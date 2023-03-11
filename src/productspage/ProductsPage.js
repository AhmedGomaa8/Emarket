import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import bgimgg from "../imgs/bg6.jpg";
import { addToCart } from "../rtk/slices/cart-slice";
import { fetchProducts } from "../rtk/slices/products-slice";
import "./ProductsPage.css";

function ProductsPage() {
  let dispatch = useDispatch();
  let products = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div className="products">
      <div className="container">
        <img style={{ width: "100%" }} src={bgimgg} alt="" />
        <h1
          style={{
            textAlign: "center",
            margin: "40px 0",
            borderBottom: "1px solid #777",
            paddingBottom: "20px",
          }}
        >
          Latest Products
        </h1>
        <div className="products-cards">
          {products.map((product) => {
            return (
              <div key={product.id} className="product-card">
                <img src={product.image} alt="" />
                <p>{product.category}</p>
                <h3>{product.title.slice(0, 30)}</h3>
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
                <Link to={`/products/${product.id}`} className="details">
                  <i className="fa-solid fa-eye"></i>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default ProductsPage;
