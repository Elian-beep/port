import styled, { css } from 'styled-components';
import { colors } from 'styles/vars.style'

export const DivContainer = styled.div`
    position: absolute;
    /* background: ${colors.gray_dark}; */
    backdrop-filter: blur(50px);
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
        transition: .7s;
    }

    nav {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 1.5rem;
        transform: scale(0.7);
        transition: .7s;
    }

    nav div{
        color: ${colors.white};
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

export const Bar = styled.span`
    margin: 0;
    border: 1px solid ${colors.white};
    width: 150%;
    height: 1px;
`;