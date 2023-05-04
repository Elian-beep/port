import styled from 'styled-components';
import { screens } from 'styles/vars.style';

export const DivRotateS = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (min-width: ${screens.laptop}) {
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
`;

export const ImgProfileS = styled.img`
    width: 100%;

    @media (min-width: ${screens.laptop}) {
        height: 300px;
    }

`;

export const DivInsignias = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px;
    padding-top: 16px;
`;

export const DivSkills = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
`;










