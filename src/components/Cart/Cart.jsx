import React from "react";
import styled from "styled-components";
import img from "../../assets/sneakers/1.png";
import { GreenBtn } from "../GreenBtn/GreenBtn";
import { CartItem } from "./CartItem/CartItem";
import { CardEmty } from "./CartEmty/CartEmty";

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  min-height: 100vh;
  width: 100%;
  height: 100%;
  z-index: 99;
  display: flex;
  justify-content: end;
  overflow: auto;
  cursor: pointer;
`;

const Container = styled.div`
  width: 385px;
  background: #ffffff;
  box-shadow: -10px 4px 24px rgba(0, 0, 0, 0.1);
  padding: 30px;
  position: relative;
  overflow: auto;
  cursor: auto;
`;

const Footer = styled.footer`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  flex-shrink: 0;
  gap: 20px;
  height: fit-content;
  margin-top: 45px;

  position: absolute;
  bottom: 0;
  padding-bottom: inherit;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 30px;
  color: #000000;
`;

const Total = styled.div`
  display: flex;
  align-items: flex-end;
  flex: 1;

  h5 {
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    min-width: max-content;
  }
  h4 {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    min-width: max-content;
  }
  hr {
    border: 1px dashed #dfdfdf;
    width: 100%;
    height: 1px;
    transform: translateY(-5px);
    margin: 0 10px;
  }
`;

const Tax = styled(Total)``;

export const Cart = ({ cartActive }) => {
  const [active, setActive] = React.useState(cartActive);

  // active - отвечает за рендеринг корзины

  return (
    active && (
      <Overlay
        onClick={(e) => {
          setActive(false);
        }}
      >
        <Container
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Title>Корзина</Title>

          <CartItem
            imgUrl={img}
            title="Мужские Кроссовки Nike Air Max 270"
            price="12 999"
          />
          <CartItem
            imgUrl={img}
            title="Мужские Кроссовки Nike Air Max 270"
            price="12 999"
          />

          <Footer>
            <Total>
              <h5>Итого: </h5>
              <hr />
              <h4>21 498 руб. </h4>
            </Total>
            <Tax>
              <h5>Налог 5%: </h5>
              <hr />
              <h4>1074 руб. </h4>
            </Tax>
            <GreenBtn btnPadding={83} title="Оформить заказ"></GreenBtn>
          </Footer>

          {/* <CardEmty /> */}
        </Container>
      </Overlay>
    )
  );
};
