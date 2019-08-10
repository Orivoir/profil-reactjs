import React from 'react' ;
import './Anchors.css' ;
import {Link} from 'react-router-dom' ;

export const Anchors = ({links}) => (
    <ul>
        {
            links.map( link => (
                <li>
                    <Link to={link.path}>
                        <span role="img" aria-label="anchor">⚓</span> 
                        link.name
                    </Link>
                </li>
            ) )
        }
    </ul>
) ;