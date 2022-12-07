import React from "react";
import styled from "styled-components";
import { Card } from "../Card/Card";
import img from "../../assets/sneakers/1.png";

const Wrapper = styled.div`
  border-top: 1px solid #eaeaea;
  width: 100%;
  height: 100%;
`;

const MainTitle = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  color: #000000;
  padding: 35px 0;
`;

const CardsContainer = styled.div``;

export const Main = () => {
  return (
    <Wrapper>
      <MainTitle>Все кроссовки</MainTitle>
      <CardsContainer>
        <Card
          imgSrc={img}
          price="12 999"
          title="Мужские Кроссовки Nike Blazer Mid Suede"
        />
      </CardsContainer>
    </Wrapper>
  );
};
