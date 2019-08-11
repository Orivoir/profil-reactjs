import React from 'react' ;
import {Theme} from './../Theme';
import './Tablebar.css' ;
import {Anchors} from './Anchors' ;
import arrowTransferImg from './arrow-transfer.png' ;

export default class Tablebar extends React.Component {
    
    static contextType = Theme ;

    render() {

        const
            { onReversed , anchors , status } = this.props ,
            anchorsComponent = ( anchors instanceof Array && anchors.length ) ? (
                <>
                    {/* reverse button */}
                    <section className="wrap-btn-reversed">
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
                    <section className="wrap-anchors-list">
                        <Anchors links={anchors} />
                    </section>
                </>
            ) : null
        ;

        return(
            <section className={`wrap-tablebar ${this.context.theme} ${status ? 'visible':'v-hidden'}`}>

                {anchorsComponent}

            </section>
        );
    }
};
