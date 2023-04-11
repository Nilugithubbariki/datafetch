import React from "react";
import { Link } from "react-router-dom";
const Menu = () => {
    return(
        <>
        <a href="/About">About Us</a>
        <a href="/Contact">Contat Us</a>
        <br/>
        <Link to="/About">About Us</Link>
        <Link to="/Contact">Contact Us</Link>
        </>
    )
}
export default Menu;