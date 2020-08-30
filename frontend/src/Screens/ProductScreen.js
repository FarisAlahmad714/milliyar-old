import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { detailsProduct } from "../actions/productActions";

// Ask about product page css  jquery photos in homepage , babel transpile
function ProductScreen(props) {
  const [qty, setQty] = useState(1);
  const [selectedImage, setSelectedImage] = useState("");
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
    return () => {
      //
    };
  }, []);

  const handleAddtoCart = () => {
    props.history.push("/cart/" + props.match.params.id + "?qty=" + qty);
  };
  const changeImage = (image) => {
    setSelectedImage(image);
  };
  return (
    <div>
      <div className="back-to-result">
        <button>
          <Link to="/">Home</Link>
        </button>
        <button>
          <Link to="javascript:history.back()">Back </Link>
        </button>
      </div>

      {loading ? (
        <div> Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="details">
          <div className="details-image">
            <img src={selectedImage || product.image} alt="product"></img>
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
                Collection:
                <div className="product-collectionName">
                  {product.collectionName}
                </div>
                {/* add description in data if needed */}
              </li>
              <li>
                <ul className="images">
                  {[product.image, ...product.images].map((x) => (
                    <li key={x}>
                      <button className="light" onClick={() => changeImage(x)}>
                        <img src={x} alt="product" className="small" />
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
          <div className="details-action">
            <ul>
              <li>Price: {product.price}$</li>
              <li>
                Status:
                {product.isUpcoming
                  ? "Upcoming"
                  : product.countInStock > 0
                  ? " In Stock"
                  : "Out of Stock"}
              </li>
              {!product.isUpcoming && product.countInStock > 0 && (
                <>
                  <li>
                    Qty:
                    <select
                      value={qty}
                      onChange={(e) => {
                        setQty(e.target.value);
                      }}
                    >
                      {[...Array(product.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </li>
                  <li>
                    {product.countInStock > 0 && (
                      <button
                        onClick={handleAddtoCart}
                        className="button primary"
                      >
                        Add to Cart
                      </button>
                    )}
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductScreen;
