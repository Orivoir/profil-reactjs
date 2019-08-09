import React from 'react';
import { Theme } from './../Theme' ;
import pencolorImg from './pencolor.png' ;
import pencolorImgDark from './pencolorDark.svg' ;
import Dragger from './../Dragger/Dragger' ;
import './ButtonTheme.css' ;


const list = [
    {
        value:'light',
        name: 'clair'
    },
    {
        value:'dark',
        name: 'sombre'
    },
    {
        value:'alternate',
        name: 'éxotique'
    }
] ;

export default class ButtonTheme extends React.Component {

    static contextType = Theme ;

    render() {

        const { content , img } = this.props ;

        return(
            <section className={`dragger-active wrap-btn-theme ${this.context.theme}`}>
                <button>
                    {/* content define `img` props or alternate text `content` props */}
                    {
                        img ?
                        <img
                            src={( this.context.theme === 'light' ? pencolorImg : pencolorImgDark )}
                            alt="logo pen color"
                            // define default size (px)
                            width="42"
                            height="42"
                        /> : content
                    }    
                </button>
                
                <Dragger options={list} onClick={this.context.toggleTheme} />

            </section>
        ) ;
    }
};
