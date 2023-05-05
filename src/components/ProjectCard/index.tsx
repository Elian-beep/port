import { IProject } from "interfaces/iProject";
import { H3SD, PSD } from "styles/index.style";
import { AGithubcardS, AVisitcardS, DivBtnscard, DivCardcontainerS, DivCardcontentS, DivCardimageS, DivTecsS, ImgProjectCardS, SpanTecsS } from "./ProjectCard.style";
import { colors } from "styles/vars.style";

interface Props {
    projects: IProject[]
}

export function ProjectCard(props: Props) {
    return (
        <>
            {props.projects.map(project => (
                <DivCardcontainerS>
                    <DivCardcontentS>
                        <DivCardimageS>
                            <ImgProjectCardS src={project.urlImage} />
                        </DivCardimageS>
                        <H3SD color={colors.white} >{project.name}</H3SD>
                        <PSD>{project.desc}</PSD>
                        <DivTecsS>
                            {project.category.map(category => (
                                <SpanTecsS>{category}</SpanTecsS>
                            ))}
                        </DivTecsS>
                        <DivBtnscard>
                            <AGithubcardS href={project.githubLink} >Github</AGithubcardS>
                            <AVisitcardS href={project.web.webLink} isWeb={project.web.isWeb} >Visitar</AVisitcardS>
                        </DivBtnscard>
                    </DivCardcontentS>
                </DivCardcontainerS>
            ))}
        </>
    );
} 