import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../reducers/productReducer.js'; // Added .js extension
import { addToCart } from '../reducers/cartReducer.js'; // Added .js extension

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  useEffect(() => {
    const fetchedProducts = [
      { id: 1, name: 'Food Scale', description: 'Achieve precise measurements for your recipes with our state-of-the-art digital food scale. Designed for both accuracy and convenience, this sleek scale features a clear LCD display that provides easy-to-read measurements in grams, ounces, pounds, and milliliters. The tare function allows you to subtract the weight of containers, ensuring you measure only the ingredients you need.', price: 29.99, imageUrl: 'https://m.media-amazon.com/images/I/71U-jlrIrRL._AC_UF894,1000_QL80_.jpg' },
      { id: 2, name: 'Pots and Pans', description: 'Our non-stick frying pan makes cooking and cleanup a breeze. Featuring a high-quality non-stick coating, this pan allows you to cook with less oil and effortlessly release food. The sturdy construction and even heat distribution make it perfect for frying eggs, sautéing vegetables, and searing meats. Enjoy hassle-free cooking with this versatile frying pan.', price: 49.99, imageUrl: 'https://m.media-amazon.com/images/I/41RozqkS3BL._AC_.jpg' },
    ];
    dispatch(setProducts(fetchedProducts));
  }, [dispatch]);

  return (
    <div className="container my-4">
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <img src={product.imageUrl} className="card-img-top" alt={product.name} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <div className="mt-auto">
                  <p className="text-success"><strong>${product.price.toFixed(2)}</strong></p>
                  <button className="btn btn-primary" onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
