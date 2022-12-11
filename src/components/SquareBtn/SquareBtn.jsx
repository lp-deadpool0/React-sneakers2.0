import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: #ffffff;
  border: 2px solid #f2f2f2;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  min-height: 32px;
  height: fit-content;
  width: fit-content;
  transition: 0.3s;

  &:hover {
    border: transparent;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);

    svg {
      transform: rotate(360deg) translateY(2px);

      path {
        d: path(
          "M8.99017 0.290858C9.17282 0.106499 9.42103 0.0019382 9.68054 2.66745e-05C9.94005 -0.00188485 10.1898 0.0990082 10.3751 0.280656C10.5605 0.462304 10.6664 0.709936 10.6697 0.969434C10.673 1.22893 10.5735 1.47919 10.3928 1.66552L5.16617 8.19952C5.07638 8.2962 4.96803 8.37379 4.84759 8.42766C4.72715 8.48153 4.59708 8.51058 4.46517 8.51306C4.33325 8.51555 4.20219 8.49143 4.0798 8.44214C3.95741 8.39286 3.84621 8.31941 3.75284 8.22619L0.287505 4.76219C0.103356 4.57795 -6.24838e-05 4.32811 2.8323e-08 4.06762C6.25404e-05 3.80713 0.103601 3.55734 0.287838 3.37319C0.472075 3.18904 0.721919 3.08562 0.982407 3.08569C1.24289 3.08575 1.49269 3.18929 1.67684 3.37352L4.4175 6.11486L8.96417 0.321524C8.97243 0.310983 8.98134 0.300964 8.99084 0.291524L8.99017 0.290858Z"
        );
      }
    }
  }

  padding: 0 ${({ sidePadding }, ...props) => sidePadding + "px"};

  svg {
    transition: 0.2s;
    width: 10px;
    height: 10px;
  }

  ${({ scss }) => scss}
`;

export const SquareBtn = ({
  children,
  scss,
  sidePadding = 0,
  onClick = (f) => f,
  ...props
}) => {
  // children - внутренний контент кнопки
  // scss - стили кнопки
  // sidePadding - паддниг спава и слева кнопки

  return (
    <Button onClick={onClick} scss={scss} sidePadding={sidePadding} {...props}>
      {children}
    </Button>
  );
};
