import styled from 'styled-components';

export const MenuWrapper = styled.div`
margin-bottom: 100px;
`;

export const ToggleButton = styled.div`
position: fixed;
top: 10px;
left: 10px;
z-index: 200;
cursor: pointer;
`;

export const Routing = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2196F3;
  position: fixed;
  top: 0px;
  z-index: 100;
  a {
    color: white;
    text-decoration: none;
    margin: 0px 20px;
  }
`;
