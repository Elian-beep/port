import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { MainContainer } from './styles/index.style';

export default function AppRouter() {
    return(
        <MainContainer>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </MainContainer>
    );
}