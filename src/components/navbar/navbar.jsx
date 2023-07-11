import React from "react";
import ChessLogo from "../../imagenes/chess-logo-2-removebg-preview.png";
import { Link } from "react-router-dom";


function Navbar() {


    return (

        <div className="navbar">

            <img src={ChessLogo} alt="logo" className="logo" />

            <ul className="ul-navbar">
                <li><Link to="/" className="link-nav">Home</Link></li>
                <li><Link to="/history" className="link-nav">History</Link></li>
                <li><Link to="/learn" className="link-nav">Learn</Link></li>
                <li><Link to="/profile" className="link-nav">Profile</Link></li>
                <li><Link to="/login" className="link-nav">Login</Link></li>
            </ul>

        </div>

    );

};

export default Navbar;