import styled from 'styled-components';
import { colors } from 'styles/vars.style'

export const DivContent = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const DivFlexRight = styled.div`
    text-align: right;
`;

export const DivOpenMobile = styled.div`
    display: ${({ menuIsVisible }) => menuIsVisible ? 'none' : 'block'};
    transition: 1s;
`;