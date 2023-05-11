import { H3SD } from "styles/index.style";
import { DivAccordionBodyWrapper, DivAccordionHeaderWrapper, DivAccordionWrapper, SpanIconWrapper } from "./Accordion.style"
import { useState } from 'react';
import { colors } from "styles/vars.style";

interface Props {
    title: string,
    children: React.ReactNode
}

export function Accordion(props: Props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    }
    
    return (
        <DivAccordionWrapper>
            <DivAccordionHeaderWrapper onClick={toggleAccordion} >
                <H3SD color={colors.blue_light}>{props.title}</H3SD>
                <SpanIconWrapper isOpen={isOpen}>{'\u25B4'}</SpanIconWrapper>
            </DivAccordionHeaderWrapper>
            <DivAccordionBodyWrapper isOpen={isOpen}>
                {props.children}
            </DivAccordionBodyWrapper>
        </DivAccordionWrapper>
    );
}