import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: #9dd558;
  border-radius: 18px;
  padding: 18px ${({ btnPadding }) => btnPadding + "px"};
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  span-align: center;
  color: #ffffff;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Arrow = styled.span`
  width: 16px;
  height: 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ icon }) => (icon == "forward" ? "margin-left: 10px;" : null)}
  ${({ icon }) => (icon == "backward" ? "margin-right: 10px;" : null)}
`;

export const GreenBtn = ({ btnPadding = 0, title, icon = "forward" }) => {
  // btnPadding - паддинг по бокам для гибких размеров
  // title - текст кнопки
  // icon - направление и местоположение стрелки (с переди или с зади)

  return (
    <Button btnPadding={btnPadding}>
      {icon == "forward" ? (
        <>
          <span>{title}</span>

          <Arrow icon={icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
            >
              <path
                d="M1 7H17"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 1L17 7L10 13"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Arrow>
        </>
      ) : null}
      {icon == "backward" ? (
        <>
          <Arrow icon={icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
            >
              <path
                d="M17 7L1 7"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 13L0.999999 7L8 1"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Arrow>
          <span>{title}</span>
        </>
      ) : null}
    </Button>
  );
};
