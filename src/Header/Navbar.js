import React from 'react' ;
import { NavLink } from 'react-router-dom' ;
import { routes } from './../routes' ;
import './Navbar.css' ;

export default class Navbar extends React.Component {

    constructor(props) {

        super( props ) ;

        this.scrollAction = this.scrollAction.bind( this ) ;
    }

    /**
     * @bindMethod
     * @param {Event} e 
     */
    scrollAction( {pageY} ) {

        const
            navbar = document.querySelector('header nav') ,
            mainTitle = document.querySelector('header #wrap-title')
        ;

        if( !mainTitle ) return ;
        
        if( pageY > mainTitle.offsetHeight ) {

            navbar.classList.add('fixed') ;
        } else if( pageY < mainTitle.offsetHeight ) {
            
            navbar.classList.remove('fixed') ;
        }
    }

    componentDidMount() {

        window.addEventListener( 'scroll' , this.scrollAction ) ;

    }

    componentWillMount() {

        window.removeEventListener( 'scroll' , this.scrollAction ) ;
    }

    render(){
        
        return (
            <nav id="navbar">
                <ul>
                    { routes.map( (route,key) => (
                        <li key={key}>
                            <NavLink exact to={route.path} activeClassName="current">
                                {route.name}
                            </NavLink>
                        </li>
                    ) ) }
                </ul>
            </nav>
        ) ;
    }
} ;