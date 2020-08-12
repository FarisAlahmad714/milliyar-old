import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../actions/productActions";

function HomeScreen(props) {
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());

    return () => {
      //
    };
  }, []);

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <ul className="products">
      {products.map((product) => (
        <li key={product.id}>
          <div className="product">
            <Link to={"/product/" + product._id}>
              <img
                className="product-image"
                src={product.image}
                alt={product.name}
              />
            </Link>
            <div className="product-name">
              <Link to={"/product/" + product._id}>
                <h2>{product.name}</h2>
              </Link>
            </div>
            <div className="product-category">{product.category}</div>
            <div className="product-price">{product.price}$</div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default HomeScreen;
