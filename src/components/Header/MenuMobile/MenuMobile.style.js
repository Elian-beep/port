import styled, { css } from 'styled-components';
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

    opacity: 0;
    pointer-events: none;
    transform: translateY(50px);

    transition: .4s;

    > svg {
        position: absolute;
        top: 32px;
        right: 24px;
        transform: rotate(45deg);
        transition: .4s;
    }

    nav {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 3rem;
        transform: scale(0.7);
        transition: .4s;
    }

    nav div{
        color: ${colors.gray_light};
        font-size: 18pt;
        font-weight: 600;
    }

    ${({ isVisible }) => isVisible && css`
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0);

        > svg {
            transform: rotate(0deg);
        }

        nav{
            transform: scale(1);
        }
    `}
`;