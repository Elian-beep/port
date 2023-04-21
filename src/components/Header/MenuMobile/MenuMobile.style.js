import styled from 'styled-components';
import { colors } from 'styles/vars.style'

export const DivContainer = styled.div`
    position: absolute;
    backdrop-filter: blur(3px);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;

    > svg {
        position: absolute;
        top: 1rem;
        right: 1rem;
    }

    nav {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 2rem;
    }

    nav div{
        color: ${colors.gray_light};
        font-size: 18pt;
        font-weight: 600;
    }
`;