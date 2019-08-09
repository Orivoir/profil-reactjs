import React from 'react' ;
import { NavLink } from 'react-router-dom' ;
import { routes } from './../routes' ;
import './Navbar.css' ;

export const Navbar = ({activeLink}) => (
    <nav id="navbar">
        <ul>
            { routes.map( (route,key) => (
                <li key={key}>
                    <NavLink exact to={route.path} activeClassName="current">
                        {route.name}
                    </NavLink>
                </li>
            ) ) }
        </ul>
    </nav>
) ;