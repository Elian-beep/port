import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { MainContainer } from './styles/index.style';
import Header from 'components/Header';

export default function AppRouter() {
    return(
        <MainContainer>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </MainContainer>
    );
}