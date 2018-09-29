import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Cart from '../Cart';
import WishList from '../WishList';
import Label from '../../components/Label';
import { PageWrapper, ProductList } from './styles';
import CartIcon from '../../assets/img/cart.svg';
import LikeIcon from '../../assets/img/like.svg';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      arrayOfProducts: JSON.parse(localStorage.getItem('products')) || [],
      wishList: JSON.parse(localStorage.getItem('wishlist')) || [],
    };
  }

  componentDidMount() {
    fetch('https://api.myjson.com/bins/de474')
      .then(response => response.json())
      .then(products => this.setState({ products }));
  }

  pushProductToLocal = (object, array) => {
    array.push(object);
    localStorage.setItem('products', JSON.stringify(array));
    this.setState({ arrayOfProducts: array });
  };

  pushProductToWish = (object, array) => {
    array.push(object);
    localStorage.setItem('wishlist', JSON.stringify(array));
    this.setState({ wishList: array });
  };

  removeProductToLocal = (object, arrayOfProducts) => {
    this.setState({ arrayOfProducts: arrayOfProducts.filter(e => e !== object) });
    localStorage.setItem('products', JSON.stringify(arrayOfProducts.filter(e => e !== object)));
  };

  removeProductToWish = (object, wishList) => {
    this.setState({ wishList: wishList.filter(e => e !== object) });
    localStorage.setItem('wishlist', JSON.stringify(wishList.filter(e => e !== object)));
  };

  render() {
    const {
      products,
      arrayOfProducts,
      wishList,
    } = this.state;
    return (
      <PageWrapper>
        <ProductList>
          <Label Icon={CartIcon} Text={arrayOfProducts.length} />
          <Label Icon={LikeIcon} Text={wishList.length} />
        </ProductList>
        <Switch>
          <Route path="/" exact component={() => <Home products={products} arrayOfProducts={arrayOfProducts} wishList={wishList} pushToLocal={this.pushProductToLocal} pushProductToWish={this.pushProductToWish} />} />
          <Route path="/cart/" exact component={() => <Cart arrayOfProducts={arrayOfProducts} removeProductToLocal={this.removeProductToLocal} />} />
          <Route path="/wishlist/" exact component={() => <WishList wishList={wishList} removeProductToWish={this.removeProductToWish} />} />
        </Switch>
      </PageWrapper>
    );
  }
}

export default Main;
