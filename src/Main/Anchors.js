import React from 'react' ;
import './Anchors.css' ;
import AnchorLink from 'react-anchor-link-smooth-scroll' ;

export const Anchors = ({links}) => (
    <ul className="anchors-list">
        {
            links.map( (link,key) => (
                <li key={key}>

                    <AnchorLink href={link.path}>
                        
                        <span role="img" aria-label="anchor">⚓</span>&nbsp; 
                        {link.name}

                    </AnchorLink>
                </li>
            ) )
        }
    </ul>
) ;