import React from 'react' ;
import './Anchors.css' ;

/**
* git expemples repository :  
* <https://github.com/FortAwesome/react-fontawesome/blob/master/examples/create-react-app/src/App.js#L63>
* Font icons (svg) react lib
*/
import { library } from '@fortawesome/fontawesome-svg-core' ;
import { fas } from '@fortawesome/free-solid-svg-icons' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add( fas ) ;


export const Anchors = ({links}) => (
    <ul className="anchors-list">
        {
            links.map( (link,key) => (
                <li key={key}>

                    <a href={link.path}>
                        
                        <FontAwesomeIcon 

                            icon={['fas','anchor']}
                            size="sm"
                        />&nbsp;
                        {link.name}

                    </a>
                </li>
            ) )
        }
    </ul>
) ;