import { IoMdClose } from 'react-icons/io';
import { colors } from 'styles/vars.style';
import { Bar, DivContainer } from './MenuMobile.style';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

interface Props{
    menuIsVisible: boolean,
    setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export default function MenuMobile(props: Props) {

    useEffect(() => {
        document.body.style.overflowY = props.menuIsVisible ? 'hidden' : 'auto';
    }, [props.menuIsVisible]);

    const navigate = useNavigate();
    function redirectPage(route: string) {
        navigate(`/${route}`);
        props.setMenuIsVisible(false);
    }

    return (
        <DivContainer isVisible={props.menuIsVisible}>
            <IoMdClose size={45} color={colors.gray_light} onClick={() => props.setMenuIsVisible(false)} />
            <nav>
                <div onClick={() => redirectPage('')} >Home</div>
                <Bar />
                <div onClick={() => redirectPage('projects')}>Projetos</div>
                <Bar />
                <div onClick={() => redirectPage('curriculum')}>Currículo</div>
            </nav>
        </DivContainer>
    );
}