import styled from 'styled-components';
import { colors } from 'styles/vars.style';

export const FooterS = styled.footer`
    background: ${colors.gray_dark};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px 24px;
    gap: 1em;
    font-size: 14pt;
`;

export const DivDevS = styled.div`
    color: ${colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;

    & a{
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${colors.purple_light};
        font-style: normal;
        text-decoration: none;
    }
`;

export const DivContactS = styled.div`
    color: ${colors.gray_light};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
`;

export const UlContactS = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.5em;
    
    & li a{
        text-decoration: none;
        color: ${colors.gray_light};
    }

    & li a .contact-label{
        display: none;
    }
`;

export const DivBarS = styled.div`
    width: 100%;
    height: 1px;
    background: ${colors.gray_light};
`;