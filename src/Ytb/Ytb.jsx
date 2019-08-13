import React from 'react';
import {Theme} from './../Theme' ;
import './Ytb.css';
import Iframe from 'react-iframe' ;

export default class Ytb extends React.Component {
    
    static contextType = Theme ;

    render() {

        const { id , tip , src , title } = this.props ;

        return(
            <section
                id={id}
                className={`
                    ${this.context.theme}
                    ytb-integrate
                `}
            >

                {
                    title &&
                    <h2>{title}</h2>
                }

                <Iframe
                    width="560"
                    height="420"
                    src={src}
                    frameborder="0"
                    position="relative"
                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                />

            </section>
        ) ;
    }
};
