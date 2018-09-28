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
      products: [
        {
          id: 1,
          name: 'Example',
          price: 89.99,
          image: 'https://image.ibb.co/kcdsRp/backpack.png',
        },
        {
          id: 2,
          name: 'Example',
          price: 39.99,
          image: 'https://image.ibb.co/fDfve9/shoes.png',
        },
        {
          id: 3,
          name: 'Example',
          price: 9.99,
          image: 'https://image.ibb.co/jRWOXU/watch.png',
        },
        {
          id: 4,
          name: 'Example',
          price: 79.99,
          image: 'https://image.ibb.co/eP3Fe9/Watch.png',
        },
        {
          id: 5,
          name: 'Example',
          price: 139.99,
          image: 'https://image.ibb.co/bRpoz9/Shoes.png',
        },
        {
          id: 6,
          name: 'Example',
          price: 89.99,
          image: 'https://image.ibb.co/kcdsRp/backpack.png',
        },
        {
          id: 7,
          name: 'Example',
          price: 39.99,
          image: 'https://image.ibb.co/fDfve9/shoes.png',
        },
        {
          id: 8,
          name: 'Example',
          price: 9.99,
          image: 'https://image.ibb.co/jRWOXU/watch.png',
        },
        {
          id: 9,
          name: 'Example',
          price: 79.99,
          image: 'https://image.ibb.co/eP3Fe9/Watch.png',
        },
        {
          id: 10,
          name: 'Example',
          price: 139.99,
          image: 'https://image.ibb.co/bRpoz9/Shoes.png',
        },
        {
          id: 11,
          name: 'Example',
          price: 89.99,
          image: 'https://image.ibb.co/kcdsRp/backpack.png',
        },
        {
          id: 12,
          name: 'Example',
          price: 39.99,
          image: 'https://image.ibb.co/fDfve9/shoes.png',
        },
        {
          id: 13,
          name: 'Example',
          price: 9.99,
          image: 'https://image.ibb.co/jRWOXU/watch.png',
        },
        {
          id: 14,
          name: 'Example',
          price: 79.99,
          image: 'https://image.ibb.co/eP3Fe9/Watch.png',
        },
        {
          id: 15,
          name: 'Example',
          price: 139.99,
          image: 'https://image.ibb.co/bRpoz9/Shoes.png',
        },
        {
          id: 16,
          name: 'Example',
          price: 89.99,
          image: 'https://image.ibb.co/kcdsRp/backpack.png',
        },
        {
          id: 17,
          name: 'Example',
          price: 39.99,
          image: 'https://image.ibb.co/fDfve9/shoes.png',
        },
        {
          id: 18,
          name: 'Example',
          price: 9.99,
          image: 'https://image.ibb.co/jRWOXU/watch.png',
        },
        {
          id: 19,
          name: 'Example',
          price: 79.99,
          image: 'https://image.ibb.co/eP3Fe9/Watch.png',
        },
        {
          id: 20,
          name: 'Example',
          price: 139.99,
          image: 'https://image.ibb.co/bRpoz9/Shoes.png',
        },
        {
          id: 21,
          name: 'Example',
          price: 89.99,
          image: 'https://image.ibb.co/kcdsRp/backpack.png',
        },
        {
          id: 22,
          name: 'Example',
          price: 39.99,
          image: 'https://image.ibb.co/fDfve9/shoes.png',
        },
        {
          id: 23,
          name: 'Example',
          price: 9.99,
          image: 'https://image.ibb.co/jRWOXU/watch.png',
        },
        {
          id: 24,
          name: 'Example',
          price: 79.99,
          image: 'https://image.ibb.co/eP3Fe9/Watch.png',
        },
        {
          id: 25,
          name: 'Example',
          price: 139.99,
          image: 'https://image.ibb.co/bRpoz9/Shoes.png',
        },
        {
          id: 26,
          name: 'Example',
          price: 89.99,
          image: 'https://image.ibb.co/kcdsRp/backpack.png',
        },
        {
          id: 27,
          name: 'Example',
          price: 39.99,
          image: 'https://image.ibb.co/fDfve9/shoes.png',
        },
        {
          id: 28,
          name: 'Example',
          price: 9.99,
          image: 'https://image.ibb.co/jRWOXU/watch.png',
        },
        {
          id: 29,
          name: 'Example',
          price: 79.99,
          image: 'https://image.ibb.co/eP3Fe9/Watch.png',
        },
        {
          id: 30,
          name: 'Example',
          price: 139.99,
          image: 'https://image.ibb.co/bRpoz9/Shoes.png',
        },
        {
          id: 31,
          name: 'Example',
          price: 89.99,
          image: 'https://image.ibb.co/kcdsRp/backpack.png',
        },
        {
          id: 32,
          name: 'Example',
          price: 39.99,
          image: 'https://image.ibb.co/fDfve9/shoes.png',
        },
        {
          id: 33,
          name: 'Example',
          price: 9.99,
          image: 'https://image.ibb.co/jRWOXU/watch.png',
        },
        {
          id: 34,
          name: 'Example',
          price: 79.99,
          image: 'https://image.ibb.co/eP3Fe9/Watch.png',
        },
        {
          id: 35,
          name: 'Example',
          price: 139.99,
          image: 'https://image.ibb.co/bRpoz9/Shoes.png',
        },
        {
          id: 36,
          name: 'Example',
          price: 89.99,
          image: 'https://image.ibb.co/kcdsRp/backpack.png',
        },
        {
          id: 37,
          name: 'Example',
          price: 39.99,
          image: 'https://image.ibb.co/fDfve9/shoes.png',
        },
        {
          id: 38,
          name: 'Example',
          price: 9.99,
          image: 'https://image.ibb.co/jRWOXU/watch.png',
        },
        {
          id: 39,
          name: 'Example',
          price: 79.99,
          image: 'https://image.ibb.co/eP3Fe9/Watch.png',
        },
        {
          id: 40,
          name: 'Example',
          price: 139.99,
          image: 'https://image.ibb.co/bRpoz9/Shoes.png',
        },
        {
          id: 41,
          name: 'Example',
          price: 89.99,
          image: 'https://image.ibb.co/kcdsRp/backpack.png',
        },
        {
          id: 42,
          name: 'Example',
          price: 39.99,
          image: 'https://image.ibb.co/fDfve9/shoes.png',
        },
        {
          id: 43,
          name: 'Example',
          price: 9.99,
          image: 'https://image.ibb.co/jRWOXU/watch.png',
        },
        {
          id: 44,
          name: 'Example',
          price: 79.99,
          image: 'https://image.ibb.co/eP3Fe9/Watch.png',
        },
        {
          id: 45,
          name: 'Example',
          price: 139.99,
          image: 'https://image.ibb.co/bRpoz9/Shoes.png',
        },
        {
          id: 46,
          name: 'Example',
          price: 89.99,
          image: 'https://image.ibb.co/kcdsRp/backpack.png',
        },
        {
          id: 47,
          name: 'Example',
          price: 39.99,
          image: 'https://image.ibb.co/fDfve9/shoes.png',
        },
        {
          id: 48,
          name: 'Example',
          price: 9.99,
          image: 'https://image.ibb.co/jRWOXU/watch.png',
        },
        {
          id: 49,
          name: 'Example',
          price: 79.99,
          image: 'https://image.ibb.co/eP3Fe9/Watch.png',
        },
        {
          id: 50,
          name: 'Example',
          price: 139.99,
          image: 'https://image.ibb.co/bRpoz9/Shoes.png',
        },
        {
          id: 51,
          name: 'Example',
          price: 89.99,
          image: 'https://image.ibb.co/kcdsRp/backpack.png',
        },
        {
          id: 52,
          name: 'Example',
          price: 39.99,
          image: 'https://image.ibb.co/fDfve9/shoes.png',
        },
        {
          id: 53,
          name: 'Example',
          price: 9.99,
          image: 'https://image.ibb.co/jRWOXU/watch.png',
        },
        {
          id: 54,
          name: 'Example',
          price: 79.99,
          image: 'https://image.ibb.co/eP3Fe9/Watch.png',
        },
        {
          id: 55,
          name: 'Example',
          price: 139.99,
          image: 'https://image.ibb.co/bRpoz9/Shoes.png',
        },
        {
          id: 56,
          name: 'Example',
          price: 89.99,
          image: 'https://image.ibb.co/kcdsRp/backpack.png',
        },
        {
          id: 57,
          name: 'Example',
          price: 39.99,
          image: 'https://image.ibb.co/fDfve9/shoes.png',
        },
        {
          id: 58,
          name: 'Example',
          price: 9.99,
          image: 'https://image.ibb.co/jRWOXU/watch.png',
        },
        {
          id: 59,
          name: 'Example',
          price: 79.99,
          image: 'https://image.ibb.co/eP3Fe9/Watch.png',
        },
        {
          id: 60,
          name: 'Example',
          price: 139.99,
          image: 'https://image.ibb.co/bRpoz9/Shoes.png',
        },
        {
          id: 61,
          name: 'Example',
          price: 89.99,
          image: 'https://image.ibb.co/kcdsRp/backpack.png',
        },
        {
          id: 62,
          name: 'Example',
          price: 39.99,
          image: 'https://image.ibb.co/fDfve9/shoes.png',
        },
        {
          id: 63,
          name: 'Example',
          price: 9.99,
          image: 'https://image.ibb.co/jRWOXU/watch.png',
        },
        {
          id: 64,
          name: 'Example',
          price: 79.99,
          image: 'https://image.ibb.co/eP3Fe9/Watch.png',
        },
        {
          id: 65,
          name: 'Example',
          price: 139.99,
          image: 'https://image.ibb.co/bRpoz9/Shoes.png',
        },
        {
          id: 66,
          name: 'Example',
          price: 89.99,
          image: 'https://image.ibb.co/kcdsRp/backpack.png',
        },
        {
          id: 67,
          name: 'Example',
          price: 39.99,
          image: 'https://image.ibb.co/fDfve9/shoes.png',
        },
        {
          id: 68,
          name: 'Example',
          price: 9.99,
          image: 'https://image.ibb.co/jRWOXU/watch.png',
        },
        {
          id: 69,
          name: 'Example',
          price: 79.99,
          image: 'https://image.ibb.co/eP3Fe9/Watch.png',
        },
        {
          id: 70,
          name: 'Example',
          price: 139.99,
          image: 'https://image.ibb.co/bRpoz9/Shoes.png',
        },
        {
          id: 71,
          name: 'Example',
          price: 89.99,
          image: 'https://image.ibb.co/kcdsRp/backpack.png',
        },
        {
          id: 72,
          name: 'Example',
          price: 39.99,
          image: 'https://image.ibb.co/fDfve9/shoes.png',
        },
        {
          id: 73,
          name: 'Example',
          price: 9.99,
          image: 'https://image.ibb.co/jRWOXU/watch.png',
        },
        {
          id: 74,
          name: 'Example',
          price: 79.99,
          image: 'https://image.ibb.co/eP3Fe9/Watch.png',
        },
        {
          id: 75,
          name: 'Example',
          price: 139.99,
          image: 'https://image.ibb.co/bRpoz9/Shoes.png',
        },
        {
          id: 76,
          name: 'Example',
          price: 89.99,
          image: 'https://image.ibb.co/kcdsRp/backpack.png',
        },
        {
          id: 77,
          name: 'Example',
          price: 39.99,
          image: 'https://image.ibb.co/fDfve9/shoes.png',
        },
        {
          id: 78,
          name: 'Example',
          price: 9.99,
          image: 'https://image.ibb.co/jRWOXU/watch.png',
        },
        {
          id: 79,
          name: 'Example',
          price: 79.99,
          image: 'https://image.ibb.co/eP3Fe9/Watch.png',
        },
        {
          id: 80,
          name: 'Example',
          price: 139.99,
          image: 'https://image.ibb.co/bRpoz9/Shoes.png',
        },
        {
          id: 81,
          name: 'Example',
          price: 89.99,
          image: 'https://image.ibb.co/kcdsRp/backpack.png',
        },
        {
          id: 82,
          name: 'Example',
          price: 39.99,
          image: 'https://image.ibb.co/fDfve9/shoes.png',
        },
        {
          id: 83,
          name: 'Example',
          price: 9.99,
          image: 'https://image.ibb.co/jRWOXU/watch.png',
        },
        {
          id: 84,
          name: 'Example',
          price: 79.99,
          image: 'https://image.ibb.co/eP3Fe9/Watch.png',
        },
        {
          id: 85,
          name: 'Example',
          price: 139.99,
          image: 'https://image.ibb.co/bRpoz9/Shoes.png',
        },
        {
          id: 86,
          name: 'Example',
          price: 89.99,
          image: 'https://image.ibb.co/kcdsRp/backpack.png',
        },
        {
          id: 87,
          name: 'Example',
          price: 39.99,
          image: 'https://image.ibb.co/fDfve9/shoes.png',
        },
        {
          id: 88,
          name: 'Example',
          price: 9.99,
          image: 'https://image.ibb.co/jRWOXU/watch.png',
        },
        {
          id: 89,
          name: 'Example',
          price: 79.99,
          image: 'https://image.ibb.co/eP3Fe9/Watch.png',
        },
        {
          id: 90,
          name: 'Example',
          price: 139.99,
          image: 'https://image.ibb.co/bRpoz9/Shoes.png',
        },
        {
          id: 91,
          name: 'Example',
          price: 89.99,
          image: 'https://image.ibb.co/kcdsRp/backpack.png',
        },
        {
          id: 92,
          name: 'Example',
          price: 39.99,
          image: 'https://image.ibb.co/fDfve9/shoes.png',
        },
        {
          id: 93,
          name: 'Example',
          price: 9.99,
          image: 'https://image.ibb.co/jRWOXU/watch.png',
        },
        {
          id: 94,
          name: 'Example',
          price: 79.99,
          image: 'https://image.ibb.co/eP3Fe9/Watch.png',
        },
        {
          id: 95,
          name: 'Example',
          price: 139.99,
          image: 'https://image.ibb.co/bRpoz9/Shoes.png',
        },
        {
          id: 96,
          name: 'Example',
          price: 89.99,
          image: 'https://image.ibb.co/kcdsRp/backpack.png',
        },
        {
          id: 97,
          name: 'Example',
          price: 39.99,
          image: 'https://image.ibb.co/fDfve9/shoes.png',
        },
        {
          id: 98,
          name: 'Example',
          price: 9.99,
          image: 'https://image.ibb.co/jRWOXU/watch.png',
        },
        {
          id: 99,
          name: 'Example',
          price: 79.99,
          image: 'https://image.ibb.co/eP3Fe9/Watch.png',
        },
        {
          id: 100,
          name: 'Example',
          price: 139.99,
          image: 'https://image.ibb.co/bRpoz9/Shoes.png',
        },
      ],
      arrayOfProducts: JSON.parse(localStorage.getItem('products')) || [],
      wishList: JSON.parse(localStorage.getItem('wishlist')) || [],
    };
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
