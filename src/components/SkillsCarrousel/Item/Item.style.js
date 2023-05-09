import styled from 'styled-components';
import { colors, screens, sizeItemsSkill } from 'styles/vars.style';

export const DivContainerRowS = styled.div`
  background-color: ${colors.gray_dark};
  padding: 1em;
  display: inline-block;
  width: ${sizeItemsSkill.width.mobile}px;
  height: ${sizeItemsSkill.heigth.mobile}px;
  overflow-y: auto;

  @media (min-width: ${screens.laptop}) {
    &::-webkit-scrollbar{
      background: ${colors.gray_medium};
      width: 5px;
    }

    &::-webkit-scrollbar-thumb{
      background: ${colors.gray_light};
    }
  }
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
`;

export const ImgTecS = styled.img`
  max-height: 150px;
  padding: .7em;
  background: ${props => props.bkGround};
  border-radius: 50%;
`;


export const PHabilitysS = styled.p`
  color: ${colors.white};
  text-align: justify;
`;