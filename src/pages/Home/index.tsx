import { DivCenterVert, DivContainerSD, H1SD, PSD } from 'styles/index.style';
import { DivContentS, DivInsignias, ImgProfileS } from './Home.style';
import profileImage from 'assets/profile.svg';
import Insignia from 'components/Insignia';

export default function Home() {
    return (
        <>
            <H1SD>Bem vindo</H1SD>
            <DivCenterVert>
                <DivContentS>
                    <PSD>
                        Meu nome é Elian Batista, desenvolvo aplicações (em sua maioria, projetos web) mas sempre com
                        aptidão e conforto em aprender e desenvolver o que for necessário para meu crescimento.
                    </PSD>
                    <ImgProfileS src={profileImage} />
                    <PSD>
                        Atuo com:
                    </PSD>
                    <DivInsignias>
                        <Insignia text='⏰ Pontualidade' />
                        <Insignia text='🤲 Humildade' />
                        <Insignia text='🙏 Respeito' />
                        <Insignia text='💬 Comunicação' />
                        <Insignia text='🤝 Comprometimento' />
                    </DivInsignias>
                </DivContentS>
            </DivCenterVert>
        </>
    );
}

// Texto bio
//Atuo com
// comprometimento, pontualidade e comunicação. Meus valores principais são o respeito
// e humildade, essenciais para bons relacionamentos interpessoais e sucesso na carreira.
// Tenho uma paixão pela tecnologia e estou sempre me especializando nas tecnologias atuais
// e futuras, buscando crescer profissionalmente e aprender cada vez mais.