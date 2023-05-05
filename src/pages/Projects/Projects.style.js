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
    background-color: ${colors.purple_light};
    color: ${colors.white};
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    ${ ({  isFilter }) => isFilter && css`
        background-color: ${colors.purple_dark};
        box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.3);
        transform: translateY(1px);
    ` }

`;