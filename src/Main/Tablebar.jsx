import React from 'react' ;
import {Theme} from './../Theme';
import './Tablebar.css' ;
import {Anchors} from './Anchors' ;

export default class Tablebar extends React.Component {
    
    static contextType = Theme ;

    render() {

        const { onReversed , anchors } = this.props ;

        return(
            <section className={`${this.context.theme}`}>

                {/* reverse button */}
                <section>
                    <button onClick={onReversed}>reverse</button>
                </section>

                {/* anchors list */}
                <section>
                    <Anchors links={anchors} />
                </section>

            </section>
        );
    }
};
