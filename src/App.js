import { Route, Routes } from "react-router-dom";
import About from "./about/About";
import "./App.css";
import Footer from "./footer/Footer";
import HomePage from "./HomePage";
import Login from "./login/Login";
import Navbar from "./navbar/Navbar";
import ProductDetails from "./productdetails/ProductDetails";
import ProductsPage from "./productspage/ProductsPage";
import Register from "./register/Register";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route
          path="/products/details/:productId"
          element={<ProductDetails />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
