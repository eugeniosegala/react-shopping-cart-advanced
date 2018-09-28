import React from 'react';
import PropTypes from 'prop-types';
import Products from '../../components/Products';
import { MainContainer } from './styles';

const Home = ({
  products,
  arrayOfProducts,
  pushToLocal,
  wishList,
  pushProductToWish,
}) => (
  <MainContainer>
    <Products products={products} arrayOfProducts={arrayOfProducts} wishList={wishList} pushToLocal={pushToLocal} pushProductToWish={pushProductToWish} />
  </MainContainer>
);

Home.propTypes = {
  products: PropTypes.array,
  wishList: PropTypes.array,
  arrayOfProducts: PropTypes.array,
  pushToLocal: PropTypes.func,
  pushProductToWish: PropTypes.func,
};

export default Home;
