import { useState } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import AboutUs from "./AboutUs";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  if (page === "home") {
    return (
      <div className="landing">
        <h1>Paradise Nursery</h1>
        <p>Your one-stop shop for beautiful houseplants</p>
        <button className="btn" onClick={() => setPage("products")}>Get Started</button>
      </div>
    );
  }

  return (
    <Provider store={store}>
      <nav>
        <span>🌿 Paradise Nursery</span>
        <div>
          <a href="#" onClick={() => setPage("home")}>Home</a>
          <a href="#" onClick={() => setPage("products")}>Plants</a>
          <a href="#" onClick={() => setPage("cart")}>Cart</a>
        </div>
      </nav>
      {page === "products" && <ProductList onCart={() => setPage("cart")} />}
      {page === "cart" && <CartItem onContinue={() => setPage("products")} />}
      {page === "about" && <AboutUs />}
    </Provider>
  );
}

export default App;
