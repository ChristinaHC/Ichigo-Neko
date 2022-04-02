import React from "react";
import Nav from "../Nav";
import "./style.css";

function Header({ currentPage, setCurrentPage }) {
    return (
        <header>
            <h1>
                Christina H. Crabtree
            </h1>
            <Nav currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </header>
    );
}

export default Header;