import * as React from "react";
// use Navlink instead of Link
import { NavLink } from "react-router-dom";

// underline the tab that is currently locate
export default function MainHeader() {

    let activeStyle = {
        textDecoration: "underline"
    };

    return (
        <header>
            <h1><NavLink to="/">iamkaki</NavLink></h1>
            <nav>
                <ul>
                    <li>
                        <NavLink 
                            to="/" style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                            }
                            >Home
                        </NavLink>
                    </li>
                    <li><NavLink 
                            to="/about" style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                            }
                            >About
                        </NavLink>
                    </li>
                    <li><NavLink 
                            to="/projects" style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                            }
                            >Projects
                        </NavLink>
                    </li>
                    <li><NavLink 
                            to="/contact" style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                            }
                            >Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}