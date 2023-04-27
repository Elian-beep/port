import styled from 'styled-components';
import { colors, screens } from 'styles/vars.style'

export const NavBar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    color: ${colors.gray_light};
    font-size: 16pt;
    cursor: pointer;
    
    @media (min-width: ${screens.laptop}) { 

        gap: 3rem;

        & div{
            position: relative;
            display: inline-block;

        }

        & div::before{
            content: "";
            position: absolute;
            bottom: 0;
            width: 0;
            left: 50%;
            height: 2px;
            background-color: #fff;
            transform: translateX(-50%);
            transition: width 0.3s ease-in-out;
        }

        & div:hover::before{
            width: 100%;
        }


    }
`;