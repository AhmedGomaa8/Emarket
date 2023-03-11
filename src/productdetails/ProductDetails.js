import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addToCart } from "../rtk/slices/cart-slice";
import "./ProductDetails.css";
function ProductDetails() {
  let dispatch = useDispatch();
  let param = useParams();
  let [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${param.productId}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, []);
  return (
    <div key={product.id} className="product-details">
      <div className="product-img">
        <img src={product.image} alt="" />
      </div>
      <div className="info">
        <h4>{product.category}</h4>
        <h1>{product.title}</h1>
        <p className="rate">
          Rating {product.rating && product.rating.rate}{" "}
          <i className="star fa-solid fa-star"></i>
        </p>
        <span>
          ${product.price} <del>${(product.price + 50).toFixed(2)}</del>
        </span>
        <p className="description">{product.description}</p>
        <button onClick={() => dispatch(addToCart(product))}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}
export default ProductDetails;
