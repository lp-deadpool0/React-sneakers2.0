import React from "react";
import styled, { css } from "styled-components";
import { LikeBtn } from "./LikeBtn/LikeBtn";
import { SquareBtn } from "../SquareBtn/SquareBtn";

const Wrapper = styled.div`
  width: 210px;
  height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  background: #ffffff;
  border: 2.5px solid #f3f3f3;
  border-radius: 40px;
  transition: all 0.3s;
  position: relative;

  &:hover {
    box-shadow: 0px 14px 30px rgba(0, 0, 0, 0.05);
    transform: translateY(-5px);
  }
`;

const Image = styled.div`
  width: 133px;
  height: 112px;
  align-self: center;
`;

const Title = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  padding: 14px 0;
  color: #000000;
  max-width: 150px;
`;

const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 32px;
  grid-template-rows: repeat(2, 16px);
  width: 100%;

  span {
    grid-area: 1/1;
    font-weight: 500;
    font-size: 11px;
    line-height: 13px;
    text-transform: uppercase;
    color: #bdbdbd;
  }
`;

const Price = styled.h3`
  font-weight: 700;
  grid-area: 2/1;

  font-size: 14px;
  line-height: 17px;
  color: #000000;
`;

const addCartBtn = css`
  &:hover {
    ${({ cartAdded }) =>
      cartAdded &&
      `
        svg {
          transform: rotate(360deg) translateY(2px);

          path {
            d: path(
              "M8.99017 0.290858C9.17282 0.106499 9.42103 0.0019382 9.68054 2.66745e-05C9.94005 -0.00188485 10.1898 0.0990082 10.3751 0.280656C10.5605 0.462304 10.6664 0.709936 10.6697 0.969434C10.673 1.22893 10.5735 1.47919 10.3928 1.66552L5.16617 8.19952C5.07638 8.2962 4.96803 8.37379 4.84759 8.42766C4.72715 8.48153 4.59708 8.51058 4.46517 8.51306C4.33325 8.51555 4.20219 8.49143 4.0798 8.44214C3.95741 8.39286 3.84621 8.31941 3.75284 8.22619L0.287505 4.76219C0.103356 4.57795 -6.24838e-05 4.32811 2.8323e-08 4.06762C6.25404e-05 3.80713 0.103601 3.55734 0.287838 3.37319C0.472075 3.18904 0.721919 3.08562 0.982407 3.08569C1.24289 3.08575 1.49269 3.18929 1.67684 3.37352L4.4175 6.11486L8.96417 0.321524C8.97243 0.310983 8.98134 0.300964 8.99084 0.291524L8.99017 0.290858Z"
            );
          }
        }
  `}
  }

  ${({ cartAdded }) =>
    cartAdded &&
    `
    border: none;
    background: linear-gradient(180deg, #89F09C 0%, #3CC755 100%);
  `}
`;

export const Card = ({
  imgUrl = "",
  title = "Lorem ipsum dolor sit, amet consectetur adipisicing.",
  price = "0",
}) => {
  const [cartAdded, setCartAdded] = React.useState(false);

  const AddToCart = () => {
    setCartAdded(!cartAdded);
  };

  return (
    <Wrapper>
      <LikeBtn />
      <Image>
        <img src={imgUrl} alt="sneakers" />
      </Image>
      <Title>{title}</Title>
      <Info>
        <span>ЦЕНА</span>
        <Price>{price + " руб."}</Price>
        <SquareBtn onClick={AddToCart} cartAdded={cartAdded} scss={addCartBtn}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
              fill="#D3D3D3"
            />
          </svg>
        </SquareBtn>
      </Info>
    </Wrapper>
  );
};
