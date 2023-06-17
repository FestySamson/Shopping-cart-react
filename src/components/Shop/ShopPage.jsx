// ShopPage.js
import React, { useContext } from 'react';
import { CartContext } from '../../CartContext';
import ProductCard from './ProductCard';
import { PRODUCTS } from '../../Products';
import './product.css'

const ShopPage = () => {
  const { addToCart } = useContext(CartContext);

  return (

     
        <div>
          <div className="wrap">
            {PRODUCTS.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
        </div>
      )
};

export default ShopPage;
