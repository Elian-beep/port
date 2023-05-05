import styled from 'styled-components';
import { colors } from 'styles/vars.style';

export const DivCardcontainerS = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 420px;
    width: 300px;
    padding: 12px;
    border-radius: 5px;
    background: ${colors.gray_dark};
    `;

export const DivCardcontentS = styled.div`
overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 1em;
    align-items: center;
    border-radius: 5px;

`;

export const DivCardimageS = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    `;

export const ImgProjectCardS = styled.img`
    border-radius: 5px;
    max-height: 150px;
    width: 100%;
`;

export const DivTecsS = styled.div`
    width: 100%;
    display: flex;
    gap: .5em;
    flex-wrap: wrap;
`;

export const SpanTecsS = styled.span`
    padding: 6px;
    font-size: 10pt;
    background: ${colors.blue_light};
    border-radius: 4px;
`;

export const DivBtnscard = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const AGithubcardS = styled.a`
    width: 48%;
    padding: 12px;
    font-size: 12pt;
    border-radius: 4px;
    background: ${colors.purple_dark};
    border: none;
    color: ${colors.white};
    letter-spacing: 2px;
    text-align: center;
    text-decoration: none;
`;

export const AVisitcardS = styled.a`
    display: ${props => props.isWeb ? 'block' : 'none'};
    width: 48%;
    padding: 12px;
    font-size: 12pt;
    border-radius: 4px;
    background: ${colors.purple_dark};
    border: none;
    color: ${colors.white};
    letter-spacing: 2px;
    text-align: center;
    text-decoration: none;
`;