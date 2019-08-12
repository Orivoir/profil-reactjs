import React from 'react';


/**
* git expemples repository :  
* <https://github.com/FortAwesome/react-fontawesome/blob/master/examples/create-react-app/src/App.js#L63>
* Font icons (svg) react lib
*/
import { library } from '@fortawesome/fontawesome-svg-core' ;
import { fab } from '@fortawesome/free-brands-svg-icons' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add( fab ) ;


export const Figcaption = ({src, before} ) => (
    
    <figcaption>
        {before}

        <a href={src}>
            <FontAwesomeIcon
                icon={['fab','twitter']}
                size="sm"
                style={{color:"#1da1f2"}}
            />&nbsp;
            lire sur twitter
        </a>
    </figcaption>
) ;