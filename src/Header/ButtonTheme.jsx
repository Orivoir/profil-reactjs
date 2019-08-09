import React from 'react';
import { Theme } from './../Theme' ;
import './ButtonTheme.css' ;
import pencolorImg from './pencolor.png' ; 

// const list = ['light' , 'dark' , 'alternate' ] ;

export default class ButtonTheme extends React.Component {

    static contextType = Theme ;

    render() {

        const { content , img } = this.props ;

        return(
            <section className={`wrap-btn-theme ${this.context.theme}`}>
                <button>
                    {/* content define `img` props or alternate text `content` props */}
                    {
                        img ?
                        <img
                            src={pencolorImg}
                            alt="logo pen color"
                            // define default size (px)
                            width="42"
                            height="42"
                        /> : content
                    }
                </button>

                {/* <Dragger options={list} onClick={this.context.toggleTheme} /> */}

            </section>
        ) ;
    }
};
