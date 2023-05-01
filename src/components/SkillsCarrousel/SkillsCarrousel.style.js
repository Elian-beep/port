import styled from 'styled-components';
import { sizeItemsSkill } from 'styles/vars.style';

export const DivListAreaS = styled.div`
    overflow-x: hidden;
    padding-left: 30px;
`;

export const DivListS = styled.div`
    transition: all ease .3s;
    width: ${props=>props.width}px;
`;

export const DivButtonLeft = styled.div`
    position: absolute;
    width: 40px;
    height: ${sizeItemsSkill.heigth.mobile}px;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    opacity: 1;
    transition: all ease 0.4s;

    left: 0;
`;

export const DivButtonRight = styled.div`
    position: absolute;
    width: 40px;
    height: ${sizeItemsSkill.heigth.mobile}px;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    opacity: 1;
    transition: all ease 0.4s;

    right: 0;
`;

