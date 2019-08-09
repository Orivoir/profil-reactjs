import React from 'react';
import {Theme} from './../Theme' ;
import './Dragger.css';

export default class Dragger extends React.Component {
 
    static contextType = Theme ;

    render() {

        const { options , onClick } = this.props ;

        return(
            <ul className={`${this.context.theme} dragger`}>
                {
                    options.map( (option,key) => (
                        <li className="dragger-item" onClick={() => onClick( option.value )} key={key}>
                            <span>{option.name}</span>
                        </li>
                    )  )
                }
            </ul>
        )
    }
};
