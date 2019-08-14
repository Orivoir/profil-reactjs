import React from 'react' ;
import {Theme} from './../Theme';
import './Main.css' ;
import Tablebar from './Tablebar' ;
import CookieBanner from './../CookieBanner/CookieBanner' ;
import Footer from './../Footer/Footer' ;
import {HashLink as Link} from 'react-router-hash-link';
/**
* git expemples repository :  
* <https://github.com/FortAwesome/react-fontawesome/blob/master/examples/create-react-app/src/App.js#L63>
* Font icons (svg) react lib
*/
import { library } from '@fortawesome/fontawesome-svg-core' ;
import { fas } from '@fortawesome/free-solid-svg-icons' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add( fas ) ;

export default class Main extends React.Component {
    
    static contextType = Theme ;

    state = {
        left: true ,
        cookieBanner: null
    } ;

    constructor( props ) {

        super( props ) ;
        this.onChangeReversed = this.onChangeReversed.bind( this ) ;
        this.scrollAction = this.scrollAction.bind( this ) ; 
    }

    /**
     * @bindMethod [constructor]
     * @param {SyntheticEvent} e 
     */
    onChangeReversed( e ) {

        e.preventDefault() ;

        this.setState( state => (
        
            { left: !state.left }
        
        ) ) ;
    }

    
    /**
     * @bindMethod [constructor]
     * @param {Event} e 
     */
    scrollAction( {pageY} ) {

        const toTop = document.querySelector('.wrap-to-top') ;

        if( !toTop || !(toTop instanceof Node) ) return ;

        toTop
            .classList[ 
                ( pageY >= 100  ? 'remove' : 'add')
            ] ('hide-o')
        ;

    }

    componentDidMount() {

        const useCookie = sessionStorage.getItem('useCookie') ;

        if( !useCookie ) {
            this.setState( { 
                cookieBanner: <CookieBanner />
            } ) ;
        }
        
        window.addEventListener('scroll' , this.scrollAction ) ;
    }

    render() {

        const { children , anchors } = this.props ;

        return (
            <>
                <main className={`${this.context.theme} ${this.state.reversed ? 'flex-reversed' : ''}`}>

                    <Tablebar
                        status={this.state.left}
                        anchors={anchors}
                        onReversed={this.onChangeReversed}
                        left
                    />

                    <section className="main-children">
                        <div className="wrap-children">
                            {children}
                        </div>
                    </section>

                    
                    <Tablebar
                        status={!this.state.left}
                        anchors={anchors}
                        onReversed={this.onChangeReversed}
                    />

                    <div className="wrap-to-top hide-o">

                        
                        <Link 
                            to={ this.props.route + '#header' }
                        >  
                            <FontAwesomeIcon
                                icon={['fas','arrow-alt-circle-up']}
                                size='2x'
                                className='icon-to-top'
                            />
                        </Link>

                    </div>

                    {this.state.cookieBanner}

                </main>
                <Footer />
            </>
        ) ;
    }
};
