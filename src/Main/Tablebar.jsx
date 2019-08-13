import React from 'react' ;
import {Theme} from './../Theme';
import './Tablebar.css' ;
import {Anchors} from './Anchors' ;
import ReactTooltip from 'react-tooltip' ;

/**
* git expemples repository :  
* <https://github.com/FortAwesome/react-fontawesome/blob/master/examples/create-react-app/src/App.js#L63>
* Font icons (svg) react lib
*/
import { library } from '@fortawesome/fontawesome-svg-core' ;
import { fas } from '@fortawesome/free-solid-svg-icons' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add( fas ) ;

export default class Tablebar extends React.Component {
    
    static contextType = Theme ;

    constructor(props) {
        super( props ) ;

            
        this.state = {

            collapseRotation: ( this.props.left ) ? 3 : 1
        } ;

        this.state.status = true ; 

        this.onToggleTablebar = this.onToggleTablebar.bind( this ) ;
    }

    /**
     * @bindMethod [constructor]
     * @param {SyntheticEvent} e 
     */
    onToggleTablebar( e ) {

        e.preventDefault() ;

        this.setState( state => ( {
            collapseRotation: ( state.collapseRotation === 3 ? 1 : 3 ) ,
            status: !state.status
        } ) ) ;
    }

    render() {

        const
            { onReversed , anchors , status } = this.props ,
            iconColor = "#" + ( this.context.theme === 'light' ? "bdc3c7" : ( this.context.theme === 'dark' ? "2c3e50" : "332940" ) ) ,
            anchorsComponent = ( anchors instanceof Array && anchors.length ) ? (
                <>
                    {/* reverse button */}
                    <section className="wrap-btn-reversed">
                        <button
                            onClick={onReversed}
                            data-tip="échanger"
                        >
                            <FontAwesomeIcon
                                style={ {color: iconColor } }
                                data-tip="échanger"
                                onClick={this.onToggleTablebar}
                                icon={['fas' , 'exchange-alt' ]}
                                size="2x"
                            />    
                        </button>
                    </section>

                    {/* anchors list */}
                    <section className="wrap-anchors-list">
                        <Anchors links={anchors} />
                    </section>


                    <section className="font-collapse-table-bar">
                        <FontAwesomeIcon
                            style={ {color: iconColor } }
                            data-tip={ this.state.status ? "fermer" : "ouvrir" }
                            onClick={this.onToggleTablebar}
                            icon={['fas' , 'angle-up' ]}
                            size="2x"
                            rotation={ 90 * this.state.collapseRotation }
                        />

                        
                        <ReactTooltip type={this.context.tip} />

                    </section>
                </>
            ) : null
        ;

        return(
            <section className={
                `wrap-tablebar
                ${this.context.theme}
                ${status ? 'visible':'v-hidden'}
                ${ this.state.status ? 'open' : 'close'}
                ${ this.props.left ? 'left' : 'right'}
                `
            }>
                {anchorsComponent}

            </section>
        );
    }
};
