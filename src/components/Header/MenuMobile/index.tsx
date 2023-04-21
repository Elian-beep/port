import { DivContainerSD, H2SD } from 'styles/index.style';
import { IoMdClose } from 'react-icons/io';
import { colors } from 'styles/vars.style';
import { DivContainer } from './MenuMobile.style';
import { useNavigate } from 'react-router-dom';

export default function MenuMobile() {
    const navigate = useNavigate();
    function redirectPage(route: string) {
        navigate(`/${route}`);
    }

    return (
        <DivContainer>
            <IoMdClose size={45} color={colors.gray_light} />
            <nav>
                <div onClick={() => redirectPage('')} >Home</div>
                <div onClick={() => redirectPage('projects')}>Projetos</div>
                <div onClick={() => redirectPage('curriculum')}>Currículo</div>
            </nav>
        </DivContainer>
    );
}