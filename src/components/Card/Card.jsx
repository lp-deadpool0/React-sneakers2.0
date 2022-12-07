import React from "react";
import styled from "styled-components";
import plusIcon from "../../assets/icons/plus.svg";
import likeIcon from "../../assets/icons/like.svg";

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
    border-radius: 40px;
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

  & span {
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

const AddToCart = styled.button`
  grid-area: 1/2/3/4;

  background: #ffffff;
  border: 2px solid #f2f2f2;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;

  &:hover {
    background: #fef0f0;
  }

  & img {
    width: 10px;
    height: 10px;
  }
`;

const Like = styled(AddToCart)`
  position: absolute;
  border: 1px solid #f2f2f2;
  top: 30px;
  left: 30px;
  grid-area: none;
  & img {
    width: 14px;
    height: 12px;
  }
`;

export const Card = ({
  imgSrc = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fthenounproject.com%2Fbrowse%2Ficons%2Fterm%2Fimg%2F&psig=AOvVaw2oQOa-Q6kZ0fdjXXTDf4ig&ust=1670526233200000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPiQrqiZ6PsCFQAAAAAdAAAAABAE",
  title = "Lorem ipsum dolor sit, amet consectetur adipisicing.",
  price = "0",
}) => {
  const cutText = (text) => {
    if (text.length > 40) {
      text = text.slice(0, 40).trim() + "...";
    }

    return text;
  };

  return (
    <Wrapper>
      <Like>
        <img src={likeIcon} alt="like icon" />
      </Like>
      <Image>
        <img src={imgSrc} alt="" />
      </Image>
      <Title title={title}>{cutText(title)}</Title>
      <Info>
        <span>ЦЕНА</span>
        <Price>{price + " руб."}</Price>
        <AddToCart>
          <img src={plusIcon} alt="check icon" />
        </AddToCart>
      </Info>
    </Wrapper>
  );
};
