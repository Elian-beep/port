import styled from 'styled-components';
import { colors } from 'styles/vars.style';

export const DivAccordionWrapper = styled.div`
    background: ${colors.gray_dark};
    margin: 10px 0;
    padding: 12px;
    border-radius: 5px;
`;

export const DivAccordionHeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`;

export const SpanIconWrapper = styled.span`
    font-size: 20pt;
    color: ${colors.blue_light};
    transform: ${ props =>
    props.isOpen ? "rotate(0deg)" : "rotate(180deg)"};
    transition: transform 0.2s ease-in;
`;

export const DivAccordionBodyWrapper = styled.div`
overflow: hidden;
display: flex;
flex-direction: column;
gap: 1em;
padding-top: 1em;
transition: max-height 0.5s ease-in-out;
max-height: ${ props =>
  props.isOpen ? "1000px" : "0"};
`;