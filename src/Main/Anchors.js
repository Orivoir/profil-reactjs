import React from 'react' ;
import './Anchors.css' ;
import {Link} from 'react-router-dom' ;

export const Anchors = ({links}) => (
    <ul className="anchors-list">
        {
            links.map( (link,key) => (
                <li key={key}>
                    <Link to={ (document.location.href + link.path)}>
                        <span role="img" aria-label="anchor">⚓</span>&nbsp; 
                        {link.name}
                    </Link>
                </li>
            ) )
        }
    </ul>
) ;