import { useEffect, useRef, useState } from "react";
import "./Nav1.css";
function Navbar() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };
    const [open, setOpen] = useState(true)
    useEffect(() => {
        if (!open) {
            document.getElementById("close-btn").click()
        }
    }, [open]);
    return (
        <header>
            <div className="logo">
                <h1>Vineet</h1>
            </div>
            <nav ref={navRef}>
                <a class="nav-link nav-link-ltr" href="#hom" onClick={() => setOpen(false)}>Home</a>
                <a class="nav-link nav-link-ltr" href="#abo" onClick={() => setOpen(false)}>About</a>
                <a class="nav-link nav-link-ltr" href="#ski" onClick={() => setOpen(false)}>Skills</a>
                <a class="nav-link nav-link-ltr" href="#pro" onClick={() => setOpen(false)}>Projects</a>
                <a class="nav-link nav-link-ltr" href="#edu" onClick={() => setOpen(false)}>Education</a>
                <a class="nav-link nav-link-ltr" href="#con" onClick={() => setOpen(false)}>Contact</a>
                <a
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>

                    <img style={{ display: "none" }} src="cross.png" id="close-btn" onClick={() => setOpen(true)} className="hamberimg" />
                </a>
            </nav>
            <div className="social_media">

            </div>
            <a className="nav-btn" onClick={showNavbar}>
                <img src="menu.png" className="hamberimg" />
            </a>
        </header>
    );
}

export default Navbar;