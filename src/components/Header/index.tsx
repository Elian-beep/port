import { DivContainerSD, H2SD } from 'styles/index.style';
import { DivContent, DivFlexRight, DivOpenMobile } from './Header.style';
import { RiMenu5Line } from 'react-icons/ri';
import { colors } from 'styles/vars.style';
import { useEffect, useState } from 'react';

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
                        <H2SD>Portifólio</H2SD>
                        <H2SD>Kihan</H2SD>
                    </DivFlexRight>
                    <DivOpenMobile menuIsVisible={props.menuIsVisible}>
                        <RiMenu5Line size={45} color={colors.gray_light} onClick={() => props.setMenuIsVisible(true)} className='mobile' />
                    </DivOpenMobile>
                </DivContent>
            </DivContainerSD>
        </section>
    );
}