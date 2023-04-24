import { ButtonSD, DivCenterVert, DivContainerSD, H1SD, H2SD, PSD } from 'styles/index.style';
import { DivContentColorS } from './Home.style';

export default function Home() {
    return (
        <DivContainerSD>
            <H1SD>Bem vindo</H1SD>
            <DivCenterVert>
                <DivContentColorS>
                    <PSD>
                        Meu nome é Elian Batista, sou técnico em informática pelo IFAM e faço graduação em ciência da computação na UEA. Desenvolvo projetos de extensão em equipe, com comprometimento, pontualidade e comunicação. Meus valores principais são o respeito e humildade, essenciais para bons relacionamentos interpessoais e sucesso na carreira. Tenho uma paixão pela tecnologia e estou sempre me especializando nas tecnologias atuais e futuras, buscando crescer profissionalmente e aprender cada vez mais.
                    </PSD>
                </DivContentColorS>
            </DivCenterVert>
        </DivContainerSD>
    );
}