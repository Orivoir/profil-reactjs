import React from 'react';
import {Theme} from './../Theme' ;
import './Ytb.css';

export default class Ytb extends React.Component {
    
    static contextType = Theme ;

    render() {

        const { tip , src , title } = this.props ;

        return(
            <section
                className={`
                    ${this.context.theme}
                    ytb-integrate
                `}
            >

                {
                    title &&
                    <h2>{title}</h2>
                }

                <iframe
                    width="560"
                    height="315"
                    src={src}
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                />

            </section>
        ) ;
    }
};
