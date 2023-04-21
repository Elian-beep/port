import styled from 'styled-components';
import { colors, screens } from 'styles/vars.style'

export const DivContent = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const DivFlexRight = styled.div`
    text-align: right;
`;

export const DivMobile = styled.div`
    display: ${({ menuIsVisible }) => menuIsVisible ? 'none' : 'block'};
    transition: 1s;

    @media (min-width: ${screens.tablet}) {
        display: none;
    }
`;

export const DivNavbar = styled.div`
    display: none;

    @media (min-width: ${screens.tablet}) {
        display: flex;
        align-items: center;
    }
`;