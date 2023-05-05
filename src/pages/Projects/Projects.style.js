import styled, { css } from 'styled-components';
import { colors } from 'styles/vars.style';

export const DivContentFillter = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5em;
`;

export const DivBtnfillter = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: .7em;
`;

export const ButtonFillterS = styled.button`
    background-color: ${colors.blue_dark};
    color: ${colors.white};
    padding: 8px;
    font-size: 10pt;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    ${ ({  isFilter }) => isFilter && css`
        background-color: transparent;
        /* box-shadow: inset 0px 2px 30px rgba(0, 0, 0, 0.7);
        transform: translateY(3px); */
    ` }
    
    & :hover{
        background-color: ${colors.purple_dark};
    }


`;