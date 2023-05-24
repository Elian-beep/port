import { H4SD, PLeftSD, PSD } from "styles/index.style";
import { colors } from "styles/vars.style";
import { DivXPS } from "./XpEducation.style";
import { IEducation } from "interfaces/IEducation";

interface Props {
    xp: IEducation
}

export function XpEducation(props: Props) {
    return (
        <DivXPS>
            <H4SD color={colors.white}>{props.xp.title}</H4SD>
            <PLeftSD>{props.xp.desc} | {props.xp.local}</PLeftSD>
            <PSD>Período: {props.xp.period}</PSD>
        </DivXPS>
    );
}