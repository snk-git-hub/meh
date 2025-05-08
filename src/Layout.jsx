import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

export default function Layout() {
    return (
        <>
         
            <div style={{
                
                maxWidth: "1400px",
                margin: "0rem auto",
                padding: "2rem",
                backgroundColor: "#ffffff", 
                border: "0px solid #ccc", 
                borderRadius: "0px"
            }}>
                   <div style={{
                fontSize: "2.5rem",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: "200",
                textAlign: "left",
                padding: "2rem",
                margin: "3rem 0",
            }}>
                Shiva Nandu
            </div>

<Navbar />
        
                <Outlet />
            </div>
            <Footer />
        </>
    );
}
