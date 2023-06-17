import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product">
        <img src={product.image} alt="" />
        <p className='name'>{product.name}</p>
      <p className='price'><span>{product.sales}</span><del>{product.regular}</del></p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
