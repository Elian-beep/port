import styled, { createGlobalStyle } from 'styled-components';
import { colors, screens } from './vars.style';

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
  font-size: 1em;
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

export const DivContainerSD = styled.div`
  padding: 32px 24px;

  @media (min-width: ${screens.tablet}) {
    padding: 32px;
  }

  @media (min-width: ${screens.laptop}) {
    padding: 32px 36px;
  }
`;

export const H2SD = styled.h2`
  font-style: normal;
    font-weight: 800;
    font-size: 18pt;
    color: ${colors.gray_light};
`;

