import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  productListReducer,
  productDetailsReducer,
  productSaveReducer,
  productDeleteReducer,
} from "./reducers/productReducers";
import Cookie from "js-cookie";
import { cartReducer } from "./reducers/cartReducer";
import { userSigninReducer, userUpdateReducer } from "./reducers/userReducers";
import { userRegisterReducer } from "./reducers/userReducers";
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  myOrderListReducer,
  orderListReducer,
  orderDeleteReducer,
} from "./reducers/orderReducer";

const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = {
  cart: { cartItems, shipping: {}, payment: {} },
  userSignin: { userInfo },
};
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  productSave: productSaveReducer,
  productDelete: productDeleteReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  userUpdate: userUpdateReducer,
  myOrderList: myOrderListReducer,
  orderList: orderListReducer,
  orderDelete: orderDeleteReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
