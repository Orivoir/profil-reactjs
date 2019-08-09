import React from 'react';
import { Theme } from './../Theme' ;
import './ButtonTheme.css' ;

export default class ButtonTheme extends React.Component {

    static contextType = Theme ;

    render() {

        const { content } = this.props ;

        return(
            <section className={`wrap-btn-theme ${this.context.theme}`}>
                <button onClick={this.context.toggleTheme}>
                    {content}
                </button>
            </section>
        ) ;
    }
};
