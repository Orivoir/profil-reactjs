import React from 'react';
import {Theme} from './../Theme';
import './Portfolio.css';
import PortfolioItem from './PortfolioItem/PortfolioItem';
import metaData from './metaData';

export default class Portfolio extends React.Component {
    
    static contextType = Theme;

    render() {

        return (
            <section id="portfolio" className={`portfolio ${this.context.theme}`}>

                <h2>Portfolio</h2>
                <blockquote>Template , UI & librairie javascript deployé avec git-pages</blockquote>
                
                <ul>
                {
                    metaData.map( data => (      
                        <PortfolioItem
                            title={data.title}
                            target={data.target}
                            img={data.img}
                            describe={data.describe}
                            cls={data.cls}
                            key={data.id}
                        />
                    ) )
                }

                </ul>

            </section>
        ) ;
    }
};
