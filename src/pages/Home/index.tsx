import { DivContentS, DivRotateS, H2SD, PSD } from 'styles/index.style';
import { DivInsignias, DivSkills, ImgProfileS } from './Home.style';
import profileImage from 'assets/profile.svg';
import Insignia from 'components/Insignia';
import SkillsCarrousel from 'components/SkillsCarrousel';

export default function Home() {

    return (
        <DivContentS>
            <DivRotateS>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '.7em'
                }} >
                    <H2SD>Olá, bem vindo</H2SD>
                    <PSD>
                        Meu nome é Elian Batista, desenvolvo aplicações (em sua maioria, projetos web) mas sempre com
                        aptidão e conforto em aprender e desenvolver o que for necessário para meu crescimento.
                        Acredito que a tecnologia é uma área em constante evolução, o que me encanta e me inspira a sempre
                        buscar mais conhecimento e habilidades. Estou sempre em busca de novos desafios e de me especializar
                        em tecnologias atuais e emergentes, a fim de contribuir para o meu crescimento profissional e pessoal, e estar preparado
                        para as inovações tecnológicas que estão por vir.
                    </PSD>
                </div>
                <ImgProfileS src={profileImage} />
            </DivRotateS>
            <PSD>
                Atuo com:
                <DivInsignias>
                    <Insignia text='🙏 Respeito' />
                    <Insignia text='⏰ Pontualidade' />
                    <Insignia text='🤝 Comprometimento' />
                    <Insignia text='💬 Comunicação' />
                    <Insignia text='🤲 Humildade' />
                </DivInsignias>
            </PSD>

            <DivSkills>
                <H2SD>Skills</H2SD>
                <SkillsCarrousel />
            </DivSkills>
        </DivContentS>
    );
}

// Texto bio
//Atuo com
// comprometimento, pontualidade e comunicação. Meus valores principais são o respeito
// e humildade, essenciais para bons relacionamentos interpessoais e sucesso na carreira.
// Tenho uma paixão pela tecnologia e estou sempre me especializando nas tecnologias atuais
// e futuras, buscando crescer profissionalmente e aprender cada vez mais.