import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import { MainContainer } from './styles/index.style';
import Home from "./pages/Home";
import MenuMobile from 'components/Header/MenuMobile';
import Header from 'components/Header';
import Projects from "pages/Projects";
import Curriculum from "pages/Curriculum";

export default function AppRouter() {
    const [menuIsVisible, setMenuIsVisible] = useState(false);
    return (
        <MainContainer>
            <Router>
                <MenuMobile menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />
                <Header setMenuIsVisible={setMenuIsVisible} menuIsVisible={menuIsVisible} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/curriculum" element={<Curriculum />} />
                </Routes>
            </Router>
        </MainContainer>
    );
}