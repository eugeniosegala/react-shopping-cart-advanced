import React from 'react';
import PropTypes from 'prop-types';
import { MainContainer } from './styles';
import Products from '../../components/Products';

const cart = ({ wishList, removeProductToWish }) => (
  <MainContainer>
    {wishList.length > 0 ? <Products products={wishList} removeProductToWish={removeProductToWish} /> : <span>Wishlist is Empty</span> }
  </MainContainer>
);

cart.propTypes = {
  wishList: PropTypes.any,
  removeProductToWish: PropTypes.func,
};

export default cart;
