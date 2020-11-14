import React from 'react'
import './Header.css'
import Navbar from '../NavBar/NavBar'
import logo from '../../icons/logo.svg'

export default function Header() {
    return (
        <header className="app-header-a">
            <div className="app-header-logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="app-nav-system">
                <Navbar />
            </div>
        </header>
    )
}