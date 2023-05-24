import { useEffect, useState } from 'react';
import { NavBar } from './Navbar.style';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const [lastClickedId, setLastClickedId] = useState('pageHome');

    const navigate = useNavigate();

    useEffect(() => {
        console.log(lastClickedId);
    }, [lastClickedId]);

    function redirectPage(route: string, id: string) {
        setLastClickedId(id);
        navigate(`/${route}`);
    }
    return (
        <NavBar clickedId={lastClickedId}>
            <div
                className={lastClickedId === 'pageHome' ? 'clicked' : ''}
                id='pageHome'
                onClick={() => { redirectPage('', 'pageHome'); }}
            >Home</div>
            <div
                className={lastClickedId === 'pageProjects' ? 'clicked' : ''} 
                id='pageProjects'
                onClick={() => { redirectPage('projects', 'pageProjects'); }}
            >Projetos</div>
            <div
                className={lastClickedId === 'pageCurriculum' ? 'clicked' : ''}
                id='pageCurriculum' 
                onClick={() => { redirectPage('curriculum', 'pageCurriculum'); }} 
            >Currículo</div>
        </NavBar>
    );
}