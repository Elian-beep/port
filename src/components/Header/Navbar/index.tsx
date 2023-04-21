import { colors } from 'styles/vars.style';
import { NavBar } from './Navbar.style';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();
    function redirectPage(route: string) {
        navigate(`/${route}`);
    }
    return (
        <NavBar>
            <div onClick={() => redirectPage('')} >Home</div>
            <div onClick={() => redirectPage('projects')} >Projetos</div>
            <div onClick={() => redirectPage('curriculum')} >Currículo</div>
        </NavBar>
    );
}