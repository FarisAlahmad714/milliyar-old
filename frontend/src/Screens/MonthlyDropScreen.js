import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../actions/productActions";

function MonthlyDropScreen(props) {
  const [collection, setCollection] = useState("");
  const [category, setCategory] = useState("");
  // const category = props.match.params.id ? props.match.params.id : '';
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  //   const collectionChangeHandler = (e) => {
  //     const newCollection = e.target.value;
  //     setCollection(newCollection);
  //     dispatch(listProducts({ collection: newCollection, category }));
  //   };
  //   const categoryChangeHandler = (e) => {
  //     const newCategory = e.target.value;
  //     setCategory(newCategory);
  //     dispatch(listProducts({ category: newCategory, category, collection }));
  //   };
  useEffect(() => {
    dispatch(listProducts({ category }));

    return () => {
      //
    };
  }, [category]);
  // wierd comma added after div block
  return (
    (<div></div>),
    loading ? (
      <div>Loading...</div>
    ) : error ? (
      <div>{error}</div>
    ) : (
      <div>
        <h1 className="monthly-drop">
          On the 25th of every month , we drop a new collection of limited
          edition products{" "}
        </h1>
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
                <div className="product-collectionName">
                  {product.collectionName}'s Collection
                </div>
                <div className="product-price">{product.price}$</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  );
}

export default MonthlyDropScreen;
