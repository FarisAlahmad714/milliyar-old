import React from "react";
import { Link } from "react-router-dom";
import data from "../data";

// Ask about product page css  jquery photos in homepage , babel transpile
function ProductScreen(props) {
  console.log(props.match.params.id);
  const product = data.products.find((x) => x._id == props.match.params.id);
  console.log(data.products);
  return (
    <div>
      <div>
        <div className="back-to-result"></div>
        <Link to="/">Back to result</Link>
      </div>
      <div className="details"></div>
      <div className="details-image">
        <img src={product.image} alt="product"></img>
      </div>
      <div className="details-info">
        <ul>
          <li>
            <h4>{product.name}</h4>
          </li>
          <li>
            <h5>{product.category}</h5>
          </li>
          <li>
            Description:
            <div>{product.description}</div>
            {/* add description in data if needed */}
          </li>
        </ul>
      </div>
      <div className="details-action">
        <ul>
          <li>Price: {product.price}$</li>
          <li>Status:{product.status} </li>
          <li>
            Qty:
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>{" "}
          </li>
          <li>
            <button className="button"> Add to Cart</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProductScreen;
