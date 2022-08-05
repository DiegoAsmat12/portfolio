import { faJava, faJs, faPython } from "@fortawesome/free-brands-svg-icons";
import { faHome, faGears, faFileCode, faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import "./NavBar.css"
const NavBar = (props) => {

    const [width] = useWindowSize();
    const [open,setOpen] = useState(false);
    let mobile = width<600?true:false;

    return (
        <>
            {
                mobile?
                <ul className="navbar-mob">
                    <li className="navbar__item active"><FontAwesomeIcon icon={faHome}/></li>
                    <li className="navbar__item">me</li>
                    <li className="navbar__item">
                        <FontAwesomeIcon icon={faGears} onClick={() => setOpen(!open)}/>
                        {
                            open && 
                            <ul className="navbar__submenu">
                                <li className="navbar__submenu-item"><FontAwesomeIcon icon={faJava}/></li>
                                <li className="navbar__submenu-item"><FontAwesomeIcon icon={faPython}/></li>
                                <li className="navbar__submenu-item"><FontAwesomeIcon icon={faJs}/></li>
                            </ul>
                        }
                    </li>
                    <li className="navbar__item"><FontAwesomeIcon icon={faFileCode}/></li>
                    <li className="navbar__item"><FontAwesomeIcon icon={faAddressBook}/></li>
                </ul>:
                <ul className="navbar">
                    <li className="navbar__item active">HOME</li>
                    <li className="navbar__item">ABOUT</li>
                    <li className="navbar__item">PROJECTS</li>
                    <li className="navbar__item">CONTACT ME</li>
                </ul>
            }
        </>
    )
}

export default NavBar;

