import styled from 'styled-components';
import { colors, screens, sizeItemsSkill } from 'styles/vars.style';

export const DivListAreaS = styled.div`
    overflow-x: auto;
    padding-left:30px;

    /* &::-webkit-scrollbar, ::-webkit-scrollbar-thumb{
      background: none;
      width: 0;
    } */

    &::-webkit-scrollbar{
        background: none;
    }
    
    &::-webkit-scrollbar-thumb{
        background: ${colors.gray_light};
    }

    @media (min-width: ${screens.laptop}) {
        overflow-x: hidden;
    }
`;

export const DivListS = styled.div`
    transition: all ease .3s;
    width: ${props => props.width}px;
`;

export const DivButtonLeft = styled.div`
    position: absolute;
    width: 40px;
    height: ${sizeItemsSkill.heigth.mobile}px;
    background-color: ${colors.black};
    z-index: 99;
    display: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    opacity: 1;
    transition: all ease 0.4s;

    left: 0;

    @media (min-width: ${screens.laptop}) {
        display: flex;
    }
`;

export const DivButtonRight = styled.div`
    position: absolute;
    width: 40px;
    height: ${sizeItemsSkill.heigth.mobile}px;
    background-color: ${colors.black};
    z-index: 99;
    display: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    opacity: 1;
    transition: all ease 0.4s;

    right: 0;

    @media (min-width: ${screens.laptop}) {
        display: flex;
    }
`;

