/* eslint-disable jsx-a11y/alt-text */
import { DivCenterVert, H2SD, DivRotateS, DivContentS, PSD, H3SD } from 'styles/index.style';
import profileImage from 'assets/profile.jpg';
import { DivAccordionContainer, DivAccordions, ImgProfileS, SpanInfoS } from './Curriculum.style';
import { colors } from 'styles/vars.style';
import { SpanTecsS } from 'components/ProjectCard/ProjectCard.style';
import { Accordion } from 'components/Accordion';
import { XpProject } from 'components/XpProject';
import experiences from 'data/experiences.json';
import educations from 'data/educations.json';
import { XpEducation } from 'components/XpEducation';

export default function Curriculum() {
    return (
        <DivContentS>
            <H2SD>Elian Oliveira Batista <PSD>Desenvolvedor de Software Jr</PSD></H2SD>
            <DivRotateS>
                <ImgProfileS src={profileImage} />
                <DivCenterVert>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '.2em'
                    }}>
                        <H3SD color={colors.gray_light} >Cursos</H3SD>
                        <SpanInfoS>Técnico em Informática</SpanInfoS>
                        <SpanInfoS>Formação completa em Typescript</SpanInfoS>
                        <SpanInfoS>Formação completa em Javascript para Backend</SpanInfoS>
                        <SpanInfoS>Formação completa HTML e CSS</SpanInfoS>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '.5em',
                        flexWrap: 'wrap'
                    }}>
                        <H3SD color={colors.gray_light}>Skills</H3SD>
                        <SpanTecsS>Javascript</SpanTecsS>
                        <SpanTecsS>Typescrypt</SpanTecsS>
                        <SpanTecsS>React.JS</SpanTecsS>
                        <SpanTecsS>Vue.JS</SpanTecsS>
                        <SpanTecsS>Node.JS</SpanTecsS>
                        <SpanTecsS>Express</SpanTecsS>
                        <SpanTecsS>SQL</SpanTecsS>
                        <SpanTecsS>MongoDB</SpanTecsS>
                        <SpanTecsS>Git</SpanTecsS>
                        <SpanTecsS>Bootstrap</SpanTecsS>
                    </div>
                </DivCenterVert>

            </DivRotateS>
            <H3SD color={colors.blue_light}>Objetivo</H3SD>
            <PSD>
                Meu objetivo é me desenvolver pessoalmente e profissionalmente na área de
                desenvolvimento de software, onde eu possa fazer a diferença e contribuir para a
                empresa. Busco uma posição de Desenvolvedor de Software Júnior em empresas de
                tecnologia, onde possa crescer minhas habilidades técnicas e pessoais, adquirir
                experiência real de trabalho com equipes e em troca oferecer meus conhecimentos
                para os serviços prestados pela empresa. Sou graduando em Ciência da Computação e
                formado como técnico em Informática, além de possuir formações de tecnologia pela
                Alura.
            </PSD>

            <DivAccordions>
                <DivAccordionContainer>
                    <Accordion title='Experiência'>
                        {experiences.map((experience) => (
                            <XpProject key={experience._id} xp={experience} />
                        ))}
                    </Accordion>
                </DivAccordionContainer>
                <DivAccordionContainer>
                    <Accordion title='Formação Acadêmica'>
                        {educations.map((education) => (
                            <XpEducation key={education._id} xp={education} />
                        ))}
                    </Accordion>
                </DivAccordionContainer>
            </DivAccordions>
        </DivContentS>
    );
}