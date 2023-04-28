import { DivContainerSD, H1SD } from 'styles/index.style';
import { DivContent, DivFlexRight, DivMobile, DivNavbar } from './Header.style';
import { RiMenu5Line } from 'react-icons/ri';
import { colors } from 'styles/vars.style';
import Navbar from './Navbar';

interface Props {
    menuIsVisible: boolean,
    setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Home(props: Props) {

    return (
        <section>
            <DivContainerSD>
                <DivContent>
                    <DivFlexRight>
                        <H1SD>Portifólio</H1SD>
                        <H1SD>Kihan</H1SD>
                    </DivFlexRight>
                    <DivNavbar>
                        <Navbar />
                    </DivNavbar>
                    <DivMobile menuIsVisible={props.menuIsVisible}>
                        <RiMenu5Line size={45} color={colors.gray_light} onClick={() => props.setMenuIsVisible(true)} className='mobile' />
                    </DivMobile>
                </DivContent>
            </DivContainerSD>
        </section>
    );
}