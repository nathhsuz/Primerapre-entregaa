import { useRef } from "react";
import { FaBars, FaTimes, } from "react-icons/fa";
import "../Styles/main.css";
import CartWidget from "../components/CartWidget"

function Navbar() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }
    return (

        <header>

            <h3>MyApp <CartWidget /> </h3>

            <nav ref={navRef}>
                
                <a src="/#">Home</a>
                <a href="/#">Merch</a>
                <a href="/#">About Us</a>
                <a href="/#">Contact</a>


                <button className="nav-btn nav-close-btn" onClick={showNavbar}>

                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />

            </button>

        </header>
    );
}


export default Navbar;