import styled from 'styled-components';
import { colors, screens } from 'styles/vars.style';

export const ImgProfileS = styled.img`
    border-radius: 4px;
    height: 300px;
    width: 200px;
    align-self: center;

    @media (min-width: ${screens.tablet}) {
        height: 400px;
        width: 300px;
    }

    @media (min-width: ${screens.laptop}) {
        height: 400px;
        width: 300px;
    }
`;

export const SpanInfoS = styled.span`
    font-size: 18px;
    color: ${colors.white};
`;

export const DivAccordions = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1em;

    @media (min-width: ${screens.laptop}) {
        flex-direction: row;
    }
`;

export const DivAccordionContainer = styled.div`
    width: 100%;

    @media (min-width: ${screens.laptop}) {
        width: 50%;
    }
`;

export const DivXPS = styled.div`
    display: flex;
    flex-direction: column;
    gap: .7em;
    padding: .8rem;
    background: ${colors.gray_medium};
    border-radius: 5px;
`;