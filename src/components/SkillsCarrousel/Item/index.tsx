import { DivCenterVert, H3SD, PSD } from "styles/index.style";
import { DivContainerRowS, DivContentRowS, DivImgtecS, ImgTecS, PHabilitysS } from "./Item.style";
import { ISkill } from 'interfaces/iSkill';
import { colors } from "styles/vars.style";

interface Props {
    skillItem: ISkill
}

export default function Item(props: Props) {
    return (
        <DivContainerRowS key={props.skillItem._id}>
            <DivImgtecS>
                <ImgTecS src={props.skillItem.urlImage} bkGround={props.skillItem.color} />
            </DivImgtecS>
            <DivContentRowS>
                <H3SD color={colors.white}>
                    {props.skillItem.tecTitle}
                </H3SD>
                <DivCenterVert>
                    <PSD>
                        {props.skillItem.desc}
                    </PSD>
                    <PHabilitysS>
                        {props.skillItem.habilitys}
                    </PHabilitysS>
                </DivCenterVert>
            </DivContentRowS>
            {/* <DivCenterHor>
                <ButtonSD>
                    Ver projetos com {props.skillItem.category}
                </ButtonSD>
            </DivCenterHor> */}
        </DivContainerRowS>
    );
}