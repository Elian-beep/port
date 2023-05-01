import styled from 'styled-components';
import { colors, sizeItemsSkill } from 'styles/vars.style';

export const DivContainerRowS = styled.div`
  background-color: ${colors.gray_dark};
  padding: 1em;
  display: inline-block;
  width: ${sizeItemsSkill.width.mobile}px;
  height: ${sizeItemsSkill.heigth.mobile}px;
  overflow-y: auto;
`;

export const DivContentRowS = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin: 1em 0;
`;

export const DivImgtecS = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1em;
  /* background: green; */
`;

export const ImgTecS = styled.img`
  max-height: 150px;
  padding: .7em;
  background: ${props => props.bkGround};
  border-radius: 50%;
`;


export const PHabilitysS = styled.p`
  color: ${colors.white};
  text-align: center;
`;