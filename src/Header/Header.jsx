import React from 'react' ;

import {Theme} from './../Theme' ;
import {Title} from './Title';
import {Navbar} from './Navbar';

import logo from './logo.png' ;
import './Header.css' ;

export default class Header extends React.Component {
    
    static contextType = Theme ;

    render() {

        return (
            
            <header className={ this.context } >

                <Title
                    text="Samuel Gaborieau"
                    bq="profil &amp; parcours du web"
                    logo={logo}
                />
                <Navbar /> 

            </header>
        );
    }
};
