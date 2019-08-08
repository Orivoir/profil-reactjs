import React from 'react' ;

import {Theme} from './../Theme' ;
import {Title} from './Title';
import {Navbar} from './Navbar';

export default class Header extends React.Component {
    
    static contextType = Theme ;

    render() {

        return(
            
            <header className={ this.context } >

                <Title />
                <Navbar /> 

            </header>
        );
    }
};
