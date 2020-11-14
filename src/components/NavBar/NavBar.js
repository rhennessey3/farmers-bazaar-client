import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'
import './NavBar.css'


export default class NavBar extends Component {
    static contextType = AuthContext;
    
    constructor(props) {
        super(props)
        this.state = {
            isLoggedin: false,
        };
        this.logoutUser = this.logoutUser.bind(this);
    }
   

    logoutUser = () => {
        this.context.logout();
        this.setState ({
            isLoggedIn: !this.state.isLoggedin,
        })
     
    }

    render() {
        const { login } = this.state;        
            return (
                <div className="nav">
                    <div className="logo"></div>
                    <div className="menu">
                        <ul>
                            {/* <li><Link to="/">Landing Page</Link></li> */}
                            {/* <li><Link to="/home">Home Page</Link></li>
                            <li><Link to="/signup">Sign up</Link></li> */}
                            <li><Link to="/add">Add Item</Link></li>
                            <li><Link to="/login" onClick={() => this.logoutUser()}>{login ? "Login" : "Logout"}</Link></li>
                            {/* <li><Link to="/inventory">Inventory</Link></li>
                            <li><Link to="/details">Product Detail</Link></li> */}
                        </ul>
                    </div>
                </div>
            )
        }
    }
