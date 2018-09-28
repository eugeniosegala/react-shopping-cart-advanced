import React from 'react';
import PropTypes from 'prop-types';
import { MainContainer } from './styles';
import Products from '../../components/Products';

const cart = ({ arrayOfProducts, removeProductToLocal }) => (
  <MainContainer>
    {arrayOfProducts.length > 0 ? <Products products={arrayOfProducts} removeProductToLocal={removeProductToLocal} /> : <span>Cart is Empty</span> }
  </MainContainer>
);

cart.propTypes = {
  arrayOfProducts: PropTypes.any,
  removeProductToLocal: PropTypes.func,
};

export default cart;
