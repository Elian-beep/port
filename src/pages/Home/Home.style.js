import styled from 'styled-components';
import { screens } from 'styles/vars.style';

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

export const ImgProfileS = styled.img`
    width: 100%;

    @media (min-width: ${screens.laptop}) {
        height: 300px;
    }
`;









