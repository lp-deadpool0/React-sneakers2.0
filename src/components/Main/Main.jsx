import React from "react";
import styled from "styled-components";
import { Card } from "../Card/Card";

const Wrapper = styled.div`
  border-top: 1px solid #eaeaea;
  width: 100%;
  height: 100%;
  margin-bottom: 60px;
`;

const MainTitle = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  color: #000000;
  padding: 35px 0;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
`;
const data = [
  {
    imgUrl: "/src/assets/sneakers/1.png",
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "12 999",
  },
  {
    imgUrl: "/src/assets/sneakers/2.png",
    title: "Мужские Кроссовки Nike Air Max 270",
    price: "12 999",
  },
  {
    imgUrl: "/src/assets/sneakers/3.png",
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "12 999",
  },
  {
    imgUrl: "/src/assets/sneakers/4.png",
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: "15 999",
  },
  {
    imgUrl: "/src/assets/sneakers/5.png",
    title: "Мужские Кроссовки Under Armour Curry 8",
    price: "9 999",
  },
];

export const Main = () => {
  return (
    <Wrapper>
      <MainTitle>Все кроссовки</MainTitle>
      <CardsContainer>
        {data.map((card, i) => (
          <Card
            imgUrl={card.imgUrl}
            price={card.price}
            title={card.title}
            key={i}
          />
        ))}
      </CardsContainer>
    </Wrapper>
  );
};
