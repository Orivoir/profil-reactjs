import React from 'react' ;
import {Theme} from './../Theme';
import './Main.css' ;

export default class Main extends React.Component {
    
    static contextType = Theme ;

    state = {
        reversed: false
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
        
            { reversed: !state.reversed }
        
        ) ) ;
    }

    render() {

        const { children , anchor } = this.props ;

        return (

            <main className={`${this.context.theme} ${this.state.reversed ? 'flex-reversed' : ''}`}>

                {/* <Tablebar content={anchor} /> */}

                <section>
                    {children}
                </section>
            </main>
        ) ;
    }
};
