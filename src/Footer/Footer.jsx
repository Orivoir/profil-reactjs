import React from 'react' ;
import './Footer.css' ;

/**
* git expemples repository :  
* <https://github.com/FortAwesome/react-fontawesome/blob/master/examples/create-react-app/src/App.js#L63>
* Font icons (svg) react lib
*/
import { library } from '@fortawesome/fontawesome-svg-core' ;
import { fab } from '@fortawesome/free-brands-svg-icons' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactTooltip from 'react-tooltip' ;

library.add( fab ) ;

export default class Footer extends React.Component {
    
    render() {

        return(
            <footer>

                <ul>
                    <li>
                        <a 
                            data-tip="contribuer au projet open source ?"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/Orivoir/profil-reactjs"
                        >
                            <FontAwesomeIcon
                                icon={['fab','github']}
                                size="sm"
                            />&nbsp;
                            contribute
                        </a>
                    </li>

                    <li>
                        Liscence&nbsp;
                        <a href="https://www.gnu.org/licenses/lgpl-3.0.txt">GNU/GPL</a>
                        - {new Date().getFullYear()} des gens biens 
                    </li>

                </ul>

                <ReactTooltip type="dark" />

            </footer>
        );
    }
};
