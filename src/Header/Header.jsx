import React from 'react' ;

import {Theme} from './../Theme' ;
import {Title} from './Title';
import Navbar from './Navbar';

import logo from './logo.png' ;
import logoDark from './logoDark.svg' ;
import './Header.css' ;

export default class Header extends React.Component {
    
    static contextType = Theme ;

    constructor(props) {

        super( props ) ;

        this.navRef = React.createRef() ;
    }

    render() {

        const { toggleTheme , activeLink } = this.props ;

        return (
            
            <header className={ this.context.theme } >

                <Title
                    toggleTheme={ toggleTheme }
                    text="Samuel Gaborieau"
                    bq="profil &amp; parcours du web"
                    logo={(this.context.theme === "light" ? logo : logoDark )}
                />

                <Navbar activeLink={activeLink} />

            </header>
        );
    }
};
