import React from "react";
import "../CSS/Navbar.css";
import profilePic from "../assets/profilePic.png";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Navbar
                </a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item mx-2">
                            <a className="nav-link active" aria-current="page" href="#">
                                Home
                            </a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#">
                                Enter Product
                            </a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#">
                                Graphs
                            </a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#">
                                Product Recommandations
                            </a>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <img className="mx-4 profilePic" src={profilePic} alt="logo"/>
                    </div>
                </div>
            </div>
        </nav>
    );
}
