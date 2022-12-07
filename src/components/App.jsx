import styled from "styled-components";
import { GlobalStyles } from "../globalStyles";
import { Main } from "./Main/Main";
import { Header } from "./Header/Header";

const Wrapper = styled.div`
  background: #fffff8;
  width: 100%;
  height: 100%;
  padding: 0 20px;
`;

const Container = styled.div`
  max-width: 1010px;
  height: 100%;
  margin: 0 auto;
`;

export const App = () => {
  return (
    <Wrapper>
      <Container>
        <Header />
        <Main />
      </Container>
      <GlobalStyles />
    </Wrapper>
  );
};
