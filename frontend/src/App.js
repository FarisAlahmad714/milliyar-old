import React from "react";
import data from "./data";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import HomeScreen from "./Views/Homescreen";
import ProductScreen from "./Views/Productscreen";
import logo from "./../src/logo.jpg";

function App() {
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
              <img src="{logo}" alt="sl" />r
            </Link>
          </div>
          <div className="header-links">
            <a href="cart.html">Cart</a>
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
            <Route path="/products/:id" component={ProductScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>
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
