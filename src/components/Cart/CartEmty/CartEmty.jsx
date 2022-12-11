import React from "react";
import styled from "styled-components";
import boxImg from "../../../assets/box.png";
import { GreenBtn } from "../../GreenBtn/GreenBtn";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.div`
  width: 120px;
  height: 120px;
  margin-bottom: 25px;
  background: url(${boxImg}) center/ cover no-repeat;
`;

const Title = styled.h3`
  font-weight: 600;
  font-size: 22px;
  line-height: 27px;
  color: #000000;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #000000;
  opacity: 0.4;
  margin-bottom: 25px;
`;

export const CardEmty = () => {
  return (
    <Wrapper>
      <Image />
      <Title>Корзина пустая</Title>
      <Description>
        Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
      </Description>
      <GreenBtn title="Вернуться назад" btnPadding={44} icon="backward" />
    </Wrapper>
  );
};
