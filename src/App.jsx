import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
function App() {
    return (
        <>
            <Header
                title="Business Website"
                subtitle="Modern Web Solutions"
                
            />
            <Routes>
                <Route path="/Home" element= {<Home/>}></Route>
                <Route path="/About" element = {<About/>}></Route>
                <Route path="/services" element={<Services />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    );
}

export default App;