import React from "react";


function NavTabs({ currentPage, HandlePageChange }) {
    return (
        <div class="col-12">
            <header>
                <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                    <div class="container-fluid">

                        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a
                                        href="#home"
                                        onClick={() => HandlePageChange("Home")}
                                        className={currentPage === "Home" ? "nav-link active" : "nav-link"}
                                    >
                                        Home
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="#about"
                                        onClick={() => HandlePageChange("About")}
                                        className={currentPage === "About" ? "nav-link active" : "nav-link"}
                                    >
                                        About
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="#contact"
                                        onClick={() => HandlePageChange("Contact")}
                                        className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
                                    >
                                        Contact
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        href="#login"
                                        onClick={currentPage === "Login" ? "nav-link active" : "nav-link"}
                                    >
                                        Login
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a 
                                    href="#signup"
                                    onClick={currentPage === "Signup" ? "nav-link active" : "nav-link"}
                                    >
                                        Signup
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div >
    );
}

export default NavTabs;