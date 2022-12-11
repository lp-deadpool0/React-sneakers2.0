import React from "react";
import styled, { css } from "styled-components";
import { SquareBtn } from "../../SquareBtn/SquareBtn";

const Container = styled.div`
  max-width: 325px;
  min-height: 119px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 2px solid #f3f3f3;
  border-radius: 20px;
  padding: 20px;
  transition: 0.3s;
  margin-bottom: 20px;

  &:hover {
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);
    transform: translateY(-5px);
  }
`;

const Info = styled.div`
  margin-left: 21px;
  margin-right: 12px;
  p {
    font-size: 14px;
    line-height: 17px;
    color: #000000;
    margin-bottom: 8px;
    width: 150px;
  }
  h3 {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
  }
`;

const Img = styled.div`
  width: 70px;
  height: 70px;
`;

const deleteBtn = css`
  svg {
    opacity: 0.7;
  }

  &:hover {
    svg {
      opacity: 1;
    }
  }
`;

export const CartItem = ({ imgUrl, price = 0, title = "Кроссовки" }) => {
  return (
    <Container
      onDoubleClick={() => {
        alert("Huina");
      }}
    >
      <Img>
        <img src={imgUrl} alt="sneackers" />
      </Img>
      <Info>
        <p>{title}</p>
        <h3>{price + " руб"}</h3>
      </Info>
      <SquareBtn scss={deleteBtn}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
        >
          <path
            d="M9.0799 7.61553L6.6311 5.16673L9.07982 2.71801C10.0241 1.77376 8.55964 0.309342 7.6154 1.25359L5.16668 3.70231L2.71787 1.2535C1.77384 0.309466 0.309467 1.77384 1.2535 2.71787L3.70231 5.16668L1.25359 7.61539C0.309343 8.55964 1.77376 10.0241 2.71801 9.07982L5.16673 6.6311L7.61553 9.0799C8.55969 10.0241 10.0241 8.55969 9.0799 7.61553Z"
            fill="#B5B5B5"
          />
        </svg>
      </SquareBtn>
    </Container>
  );
};
