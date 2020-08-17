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
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import OrdersScreen from "./screens/OrdersScreen";
import ProfileScreen from "./screens/ProfileScreen";
import AboutScreen from "./screens/AboutScreen";
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
            <Link to="/cart">Cart</Link>
            {userInfo ? (
              <Link to="/profile"> {userInfo.name} </Link>
            ) : (
              <Link to="/signin"> Log In </Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <a href="#">Admin</a>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/orders">All Orders</Link>
                    <Link to="/products">Manage Products</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
        <aside className="sidebar">
          <h3>Menu</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul className="menubar">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/monthly">Monthly Drops</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/about" component={AboutScreen} />
            <Route path="/orders" component={OrderScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/products" component={ProductsScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/signin" component={SignInScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>{" "}
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
