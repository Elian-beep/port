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

export const DivContainerSD = styled.div`
  padding: 32px 24px;

  @media (min-width: ${screens.tablet}) {
    padding: 32px;
  }

  @media (min-width: ${screens.laptop}) {
    padding: 32px 42px;
  }
`;

export const DivContentS = styled.div`
    /* padding: 16px 0; */
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const DivCenterVert = styled.div`
  display: flex;
  gap: 1em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DivCenterHor = styled.div`
  display: flex;
  gap: 1em;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonSD = styled.button`
  background-color: ${colors.blue_dark};
  color: ${colors.white};
  font-size: 1em;
  padding: 10px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background .2s ease-in;
  &:hover {
    background-color: ${colors.blue_light};
  }
`;

export const PSD = styled.p`
  font-size: 18px;
  color: ${colors.white};
  text-align: justify;
`;



export const H1SD = styled.h1`
  font-style: normal;
    font-weight: 900;
    font-size: 22pt;
    color: ${colors.blue_light};
`;

export const H2SD = styled.h2`
    font-style: normal;
    font-weight: 800;
    font-size: 18pt;
    color: ${colors.blue_light};
`;

export const H3SD = styled.h2`
    font-style: normal;
    font-weight: 600;
    font-size: 16pt;
    color: ${props => props.color};
`;
