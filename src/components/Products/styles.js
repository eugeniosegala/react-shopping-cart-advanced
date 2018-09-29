import styled from 'styled-components';
import { device } from '../../theme/media';

export const SingleProduct = styled.div`
  border: 1px solid #d4d4d4;
  border-radius: 10px;
  overflow: hidden;
  width: 250px;
  height: 350px;
  margin: 10px;
`;

export const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.laptop} {
    background-color: #FFC107;
  }
`;

export const ProductName = styled.div`
  text-align: center;
  padding: 3px;
`;

export const ProductPrice = styled.div`
  text-align: center;
  font-size: 12px;
  font-wight: bold;
  padding: 3px;
`;

export const ProductButton = styled.div`
  text-align: center;
  color: white;
  background-color: #2196F3;
  justify-content: space-around;
  display: flex;
    span {
      padding: 18px;
      width: 100%;
      cursor: pointer;
    }
    span:hover {
      background-color: #607D8B;
    }
`;

export const CartIcon = styled.img`
  width: 20px;
`;
