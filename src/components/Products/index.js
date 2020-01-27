import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import {
  SingleProduct,
  ProductName,
  ProductPrice,
  ProductButton,
  ProductDetail,
  CartIcon,
} from './styles';
import Cart from '../../assets/img/cart.svg';
import Like from '../../assets/img/like.svg';

const checkProductToLocal = (elm, arrayOfProducts, pushToLocal) => {
  if (!localStorage.getItem('products')) {
    pushToLocal(elm, arrayOfProducts);
  } else if (!JSON.parse(localStorage.getItem('products')).find(e => e.id === elm.id)) {
    pushToLocal(elm, arrayOfProducts);
  }
};

const checkProductToWish = (elm, wishList, pushProductToWish) => {
  if (!localStorage.getItem('wishlist')) {
    pushProductToWish(elm, wishList);
  } else if (!JSON.parse(localStorage.getItem('wishlist')).find(e => e.id === elm.id)) {
    pushProductToWish(elm, wishList);
  }
};

const isFavorite = (elm) => {
  let message = '';
  if (localStorage.getItem('products') && JSON.parse(localStorage.getItem('products')).find(e => e.id === elm.id)) {
    message = <CartIcon alt="cart" src={Cart} />;
  } else {
    message = 'Buy';
  }
  return message;
};

const isWish = (elm) => {
  let message = '';
  if (localStorage.getItem('wishlist') && JSON.parse(localStorage.getItem('wishlist')).find(e => e.id === elm.id)) {
    message = <CartIcon alt="cart" src={Like} />;
  } else {
    message = 'Wish';
  }
  return message;
};

const Products = ({
  products,
  arrayOfProducts,
  wishList,
  pushToLocal,
  pushProductToWish,
  removeProductToLocal,
  removeProductToWish,
}) => (
  <React.Fragment>
    {products.map((elm, index) => (
      <SingleProduct key={index}>
        <LazyLoad height={352} once>
          <React.Fragment>
            <img width="100%" alt={elm.image} src={elm.image} />
            <ProductDetail>
              <ProductName>
                {elm.name}
              </ProductName>
              <ProductPrice>
                {`€ ${elm.price}`}
              </ProductPrice>
              {!removeProductToLocal && !removeProductToWish &&
                <ProductButton>
                  <span onClick={() => checkProductToLocal(elm, arrayOfProducts, pushToLocal)}>
                    {isFavorite(elm)}
                  </span>
                  <span onClick={() => checkProductToWish(elm, wishList, pushProductToWish)}>
                    {isWish(elm)}
                  </span>
                </ProductButton>
              }
              {removeProductToLocal &&
                <ProductButton>
                  <span onClick={() => removeProductToLocal(elm, products)}>
                    Remove
                  </span>
                </ProductButton>
              }
              {removeProductToWish &&
                <ProductButton>
                  <span onClick={() => removeProductToWish(elm, products)}>
                    Remove
                  </span>
                </ProductButton>
              }
            </ProductDetail>
          </React.Fragment>
        </LazyLoad>
      </SingleProduct>
    ))}
  </React.Fragment>
);

Products.propTypes = {
  products: PropTypes.array,
  arrayOfProducts: PropTypes.array,
  wishList: PropTypes.array,
  pushToLocal: PropTypes.func,
  pushProductToWish: PropTypes.func,
  removeProductToLocal: PropTypes.func,
  removeProductToWish: PropTypes.func,
};

export default Products;
