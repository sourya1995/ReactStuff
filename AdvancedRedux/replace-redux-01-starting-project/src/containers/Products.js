import React, { useContext } from 'react';
import { useSelector, useStore } from 'react-redux';

import ProductItem from '../components/Products/ProductItem';
import './Products.css';
import productsContext from '../context/products-context';

const Products = props => {

  const [state, dispatch] = useStore()[0];
  return (
    <ul className="products-list">
      {productList.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
