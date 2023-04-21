import { DivContainerSD, H2SD } from 'styles/index.style';
import { DivContent, DivFlexRight } from './Header.style';
import { useState } from 'react';
import MenuMobile from './MenuMobile';

export default function Home() {
    const [menuIsVisible, setMenuIsVisible] = useState(true);

    return (
        <section>
            <DivContainerSD>
                <DivContent>
                    <DivFlexRight>
                        <H2SD>Portifólio</H2SD>
                        <H2SD>Kihan</H2SD>
                    </DivFlexRight>
                    <MenuMobile />
                </DivContent>
            </DivContainerSD>
        </section>
    );
}