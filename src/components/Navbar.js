import React from "react"
import logo from "../images/logo.png"

export default function Navbar() {
    return(
        <nav className="navbar-container">
        <img className= "logo" src={logo} alt="logo" />
        <p className="navbar-title">my travel journal.</p>
        </nav>
    )
}