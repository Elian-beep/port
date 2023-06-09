import styled from 'styled-components';
import { colors, screens } from 'styles/vars.style';

export const FooterS = styled.footer`
    background: ${colors.gray_dark};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px 24px;
    gap: 1em;
    font-size: 14pt;

    /* @media (min-width: ${screens.laptop}) {
        flex-direction: row;
        justify-content: space-between;
    } */
`;

export const DivDevS = styled.div`
    color: ${colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    font-size: 12pt;

    & a{
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${colors.purple_light};
        font-style: normal;
        text-decoration: none;
        transition: color .2s ease-in;
        &:hover{
            color: ${colors.purple_dark};
        }
    }

    /* @media (min-width: ${screens.tablet}) {
        width: 60%;
    } */

    @media (min-width: ${screens.laptop}) {
        width: 50%;
    }
`;

export const DivContactS = styled.div`
    color: ${colors.gray_light};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;

    & .contact-title{
        /* font-size: 12pt; */
    }

    /* @media (min-width: ${screens.tablet}) {
        width: 25%;
    } */

    @media (min-width: ${screens.laptop}) {
        width: 50%;
    }
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
        transition: color .2s ease-in;
        &:hover{
            color: ${colors.purple_dark};
        }

        @media (min-width: ${screens.tablet}) {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: .5em;
        }
    }

    & li a .contact-label{
        display: none;

        @media (min-width: ${screens.laptop}) {
            display: block;
        }
    }

    @media (min-width: ${screens.tablet}) {
        justify-content: center;
    }
`;

export const DivBarS = styled.div`
    width: 100%;
    height: 1px;
    background: ${colors.gray_light};

    /* @media (min-width: ${screens.tablet}){
        height: 150px;
        width: 1px;
    } */
`;