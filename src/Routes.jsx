import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from "./pages/Project.jsx";
import Research from "./pages/Research.jsx";
import Home from "./pages/Home.jsx";
import Error from "./pages/Error.jsx";
import Layout from "./Layout.jsx";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    
                    <Route path="Home" index element={<Home />} />
                    <Route path="Project" element={<Project />} />
                    <Route path="Research" element={<Research />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}