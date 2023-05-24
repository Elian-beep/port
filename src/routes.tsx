import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import { DivContainerSD, MainContent, MainContainer } from './styles/index.style';
import Home from "./pages/Home";
import MenuMobile from 'components/Header/MenuMobile';
import Header from 'components/Header';
import Projects from "pages/Projects";
import Curriculum from "pages/Curriculum";
import { Footer } from "components/Footer";

export default function AppRouter() {
    const [menuIsVisible, setMenuIsVisible] = useState(false);
    return (
        <MainContainer>
            <Router>
                <MainContent>
                    <MenuMobile menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />
                    <Header setMenuIsVisible={setMenuIsVisible} menuIsVisible={menuIsVisible} />
                    <DivContainerSD>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/curriculum" element={<Curriculum />} />
                        </Routes>
                    </DivContainerSD>
                </MainContent>
                <Footer />
            </Router>
        </MainContainer>
    );
}