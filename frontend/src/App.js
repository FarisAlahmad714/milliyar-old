import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import SignInScreen from "./screens/SignInScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProductsScreen from "./screens/ProductsScreen";
import logo from "./../src/logo.jpg";

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">
              Milliy
              <img src={logo} alt="sl" width="30px" height="40px" />r
            </Link>
          </div>
          <div className="header-links">
            <a href="cart.html">Cart </a>
            {userInfo ? (
              <Link to="/profile"> {userInfo.name} </Link>
            ) : (
              <Link to="/signin"> Log In </Link>
            )}
            <a href="login.html">Login</a>
          </div>
        </header>
        <aside className="sidebar">
          <h3>Menu</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="index.html">About</a>
            </li>
            <li>
              <a href="index.html">Monthly Drops</a>
            </li>
            <li>
              <a href="index.html">Categories</a>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/products" component={ProductsScreen} />
            <Route path="/signin" component={SignInScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>{" "}
          ``
        </main>
        <footer className="footer">
          {" "}
          &copy;2020 All rights reserved to MilliyarLtd.
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
