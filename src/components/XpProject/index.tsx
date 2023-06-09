import { H4SD, PLeftSD, PSD } from "styles/index.style";
import { colors } from "styles/vars.style";
import { DivXPS } from "./XpProject.style";
import { IExperience } from "interfaces/IExperiences";

interface Props {
    xp: IExperience
}

export function XpProject(props: Props) {
    return (
        <DivXPS>
            <H4SD color={colors.white}>{props.xp.title}</H4SD>
            <PLeftSD>{props.xp.desc}</PLeftSD>
            <PSD>Período: {props.xp.period}</PSD>
        </DivXPS>
    );
}