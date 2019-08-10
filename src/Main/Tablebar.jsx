import React from 'react' ;
import {Theme} from './../Theme';
import './Tablebar.css' ;
import {Anchors} from './Anchors' ;
import arrowTransferImg from './arrow-transfer.png' ;

export default class Tablebar extends React.Component {
    
    static contextType = Theme ;

    render() {

        const { onReversed , anchors , status } = this.props ;

        return(
            <section className={`${this.context.theme} ${status ? 'visible':'v-hidden'}`}>

                {/* reverse button */}
                <section>
                    <button onClick={onReversed}>
                        <img
                            src={arrowTransferImg}
                            alt="arrow transfer"
                            // default size (px)
                            width="20"
                            height="20"
                        />
                    </button>
                </section>

                {/* anchors list */}
                <section>
                    <Anchors links={anchors} />
                </section>

            </section>
        );
    }
};
