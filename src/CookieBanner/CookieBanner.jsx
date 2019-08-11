import React from 'react';
import './CookieBanner.css' ;
import {Theme} from './../Theme';
import {Link} from 'react-router-dom';

/**
* git expemples repository :  
* <https://github.com/FortAwesome/react-fontawesome/blob/master/examples/create-react-app/src/App.js#L63>
* Font icons (svg) react lib
*/

import { library } from '@fortawesome/fontawesome-svg-core' ;
import { fas } from '@fortawesome/free-solid-svg-icons' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add( fas ) ;


export default class CookieBanner extends React.Component {
    
    state = {
        status: true ,
        cookieFont: 'cookie'
    }
    static contextType = Theme ;

    constructor( props ) {

        super( props ) ;

        this.hideCookie = this.hideCookie.bind( this ) ;
        this.overCookieFont = this.overCookieFont.bind( this ) ;
        this.outCookieFont = this.outCookieFont.bind( this ) ;
    }

    /**
     * @bindMethod [constructor]
     * @param {SyntheticEvent} e 
     */
    hideCookie( e ) {

        e.preventDefault() ;
        sessionStorage.setItem('useCookie' , true ) ;
        this.setState( { status: false } )
    }

    /**
     * @bindMethod [constructor]
     * @param {SyntheticEvent} e 
     */
    outCookieFont( e ) {

        this.setState( { cookieFont: 'cookie' } ) ;
    }

    /**
     * @bindMethod [constructor]
     * @param {SyntheticEvent} e 
     */
    overCookieFont( e ) {

        this.setState( { cookieFont: 'cookie-bite' } ) ;
    }

    render() {

        return (
            <section className={`${this.context.theme} cookie-banner ${ this.state.status ? '' : 'hide' } `}>

                <Link
                    to="#"
                    onClick={this.hideCookie}
                >
                    <FontAwesomeIcon
                        icon={['fas' , 'times' ]}
                        size="2x"
                        style={{color:"#fff" , cursor:"pointer" }}
                    />
                </Link>

                <div>
                        
                    <p>
                        Nous utilisons des cookies pour vous garantir la meilleure expérience sur notre site.<br />
                        <Link to="#">Cliquez ici</Link> pour plus d'informations.
                        
                    </p>

                    <p>
                        <FontAwesomeIcon
                            icon={['fas' , this.state.cookieFont ]}
                            size="2x"
                            style={{color:"#fff"}}
                            onMouseOver={this.overCookieFont}
                            onMouseOut={this.outCookieFont}
                        />
                    </p>
                
                </div>

            </section>
        ) ;
    }
} ;
