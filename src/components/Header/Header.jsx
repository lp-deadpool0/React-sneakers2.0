import React from "react";
import styled from "styled-components";
import logoImg from "../../assets/logo.svg";

import cartIcon from "../../assets/icons/cart.svg";
import likeIcon from "../../assets/icons/like.svg";
import userIcon from "../../assets/icons/user.svg";

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0px;
`;

const Logo = styled.div`
  width: 245px;
  height: 41px;
`;

const Options = styled.ul`
  display: grid;
  grid-gap: 30px;
  grid-template-rows: auto;
  grid-template-columns: 3fr repeat(2, 1fr);

  & li {
    transition: 0.2s;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }

    & img {
      width: 20px;
      height: 20px;
    }
  }
`;

const TotalPrice = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #5c5c5c;
  margin-left: 10px;
`;

export const Header = ({ totalPrice = 0 }) => {
  // totalPrice - сумма товаров в корзине

  return (
    <Wrapper>
      <Logo>
        <img src={logoImg} alt="logo" />
      </Logo>
      <Options>
        <li>
          <img width={20} height={20} src={cartIcon} alt="cart icon" />
          <TotalPrice>{totalPrice + " руб"}</TotalPrice>
        </li>
        <li>
          <img width={20} height={20} src={likeIcon} alt="like icon" />
        </li>
        <li>
          <img width={20} height={20} src={userIcon} alt="user icon" />
        </li>
      </Options>
    </Wrapper>
  );
};
