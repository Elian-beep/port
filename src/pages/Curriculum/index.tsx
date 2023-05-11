/* eslint-disable jsx-a11y/alt-text */
import { DivCenterVert, H2SD, DivRotateS, DivContentS, PSD, H3SD, H4SD, DivBar } from 'styles/index.style';
import profileImage from 'assets/profile.jpg';
import { DivXPS, ImgProfileS, SpanInfoS } from './Curriculum.style';
import { colors } from 'styles/vars.style';
import { SpanTecsS } from 'components/ProjectCard/ProjectCard.style';
import { Accordion } from 'components/Accordion';

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

            <div>
                <Accordion title='Experiência'>
                    <DivXPS>
                        <H4SD color={colors.white}>Xiloteca Web</H4SD>
                        <PSD>
                            Uma aplicação web ainda em desenvolvimento que exibirá
                            publicamente os dados das amostras coletadas pelo CESIT UEA
                            <PSD>Período: 08/2022 - Atualmente</PSD>
                        </PSD>
                    </DivXPS>
                    <DivXPS>
                        <H4SD color={colors.white}>Este Portifólio</H4SD>
                        <PSD>
                            Esta aplicação foi totalmente desenvolvido por mim para organizar
                            minhas melhores aplicações e exibir suas funcionalidades, pondo em prática
                            minhas habilidades Full Stack
                            <PSD>Período: 05/2023 - Atualmente</PSD>
                        </PSD>
                    </DivXPS>
                    <DivXPS>
                        <H4SD color={colors.white}>Monitoria UEA CESIT</H4SD>
                        <PSD>
                            Auxílio ao professor da disciplina Linguagem de Programação na Universidade
                            do Estado do Amazonas
                            <PSD>Período: 05/2022 - 07/2022</PSD>
                        </PSD>
                    </DivXPS>
                </Accordion>
                <Accordion title='Formação Acadêmica'>
                    <PSD>conteudo</PSD>
                </Accordion>
            </div>
        </DivContentS>
    );
}