import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';

function HomeScreen(props) {
  const [collection, setCollection] = useState('');
  const [category, setCategory] = useState('');
  // const category = props.match.params.id ? props.match.params.id : '';
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  const collectionChangeHandler = (e) => {
    const newCollection = e.target.value;
    setCollection(newCollection);
    dispatch(listProducts({ collection: newCollection, category }));
  };
  const categoryChangeHandler = (e) => {
    const newCategory = e.target.value;
    setCategory(newCategory);
    dispatch(listProducts({ category: newCategory, category, collection }));
  };
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
        <div className="home-filter">
          <form>
            Collections{' '}
            <select
              name="collection"
              value={collection}
              onChange={collectionChangeHandler}
            >
              <option value="">All</option>
              <option value="Collection 1">Collection 1</option>
              <option value="Collection 2">Collection 2</option>
            </select>{' '}
            Category{' '}
            <select
              name="category"
              value={category}
              onChange={categoryChangeHandler}
            >
              <option value="">All</option>
              <option value="Category 1">Category 1</option>
              <option value="Category 2">Category 2</option>
            </select>
          </form>
        </div>
        <ul className="products">
          {products.map((product) => (
            <li key={product.id}>
              <div className="product">
                <Link to={'/product/' + product._id}>
                  <img
                    className="product-image"
                    src={product.image}
                    alt={product.name}
                  />
                </Link>
                <div className="product-name">
                  <Link to={'/product/' + product._id}>
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

export default HomeScreen;
