import React from 'react' ;
import {Theme} from './../Theme';
import './Main.css' ;
import Tablebar from './Tablebar' ;
import CookieBanner from './../CookieBanner/CookieBanner' ;


export default class Main extends React.Component {
    
    static contextType = Theme ;

    state = {
        left: true ,
        cookieBanner: null
    } ;

    constructor( props ) {

        super( props ) ;

        this.onChangeReversed = this.onChangeReversed.bind( this ) ;
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

    componentDidMount() {

        const useCookie = sessionStorage.getItem('useCookie') ;

        if( !useCookie ) {
            this.setState( { 
                cookieBanner: <CookieBanner />
            } ) ;
        }
    }

    render() {

        const { children , anchors } = this.props ;

        console.log( this.state.left );

        return (
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

                {this.state.cookieBanner}

            </main>
        ) ;
    }
};
