import styled, { createGlobalStyle } from 'styled-components';
import { colors } from './vars.style';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500;700;800&family=Roboto:wght@400;500;700&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    min-height: 100vh;
    background: ${colors.black};
  }
`;

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
`;

export const ButtonSD = styled.button`
  background-color: ${colors.gray_medium};
  color: ${colors.gray_light};
  font-size: 16px;
  padding: 10px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.gray_dark};
  }
`;

export const PSD = styled.p`
  font-size: 16px;
  color: ${colors.gray_dark};
`;

export const H1SD = styled.h1`
  font-size: ;
`;