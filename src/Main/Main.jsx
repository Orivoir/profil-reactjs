import React from 'react' ;
import {Theme} from './../Theme';
import './Main.css' ;
import Tablebar from './Tablebar' ;

export default class Main extends React.Component {
    
    static contextType = Theme ;

    state = {
        left: true
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

    render() {

        const { children , anchors } = this.props ;

        return (
            <main className={`${this.context.theme} ${this.state.reversed ? 'flex-reversed' : ''}`}>

                <Tablebar
                    status={this.state.left}
                    anchors={anchors}
                    onReversed={this.onChangeReversed}
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

            </main>
        ) ;
    }
};
