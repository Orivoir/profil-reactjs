import React from 'react' ;
import { NavLink } from 'react-router-dom' ;
import { routes } from './../routes' ;
import './Navbar.css' ;

export const Navbar = () => (
    <nav id="navbar">
        <ul>
            { routes.map( (route,key) => (
                <li key={key}>
                    <NavLink to={route.path}>
                        {route.name}
                    </NavLink>
                </li>
            ) ) }
        </ul>
    </nav>
) ;