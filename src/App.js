import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";

// style.css import
import "./assets/css/style.css";

// all pages import
import MainHeader from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
    return (
        <BrowserRouter>
            <MainHeader />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="projects" element={<Projects />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
            
        </BrowserRouter>
    );
}