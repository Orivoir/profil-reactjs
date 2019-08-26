import React from 'react';
import {Theme} from './../Theme';
import sadnessScreen from './screenshot-sadness.png';
import senzuScreen from './screenshot-senzus.png';
import coffeeeScreen from './screenshot-coffeee.png';
import './Portfolio.css';

export default class Portfolio extends React.Component {
    
    static contextType = Theme;

    render() {

        return (
            <section id="portfolio" className={`portfolio ${this.context.theme}`}>

                <h2>Portfolio</h2>
                <blockquote>Template & UI deployé avec git-pages</blockquote>
                
                <ul>
                    <li className="sadness">
                        <h2>Sadness</h2>
                        <figure>
                        
                            <a href="https://orivoir.github.io/sadness/#/">
                            
                                <img
                                    alt="screenshot template sadness"
                                    src={sadnessScreen}

                                    // default size (px)
                                    width="500"
                                    height="auto"
                                />
                            </a>

                        </figure>
                        
                        <p>
                            <a href="https://orivoir.github.io/sadness/#/">
                                Template / Application theme e-commerce UI
                            </a>
                        </p>
                    </li>
                    
                    <li className="senzu">
                        <h2>Senzu</h2>

                        <a href="https://orivoir.github.io/reactjs-transition-page/#/">    
                            <figure>
                                <img
                                    alt="screenshot template sadness"
                                    src={senzuScreen}

                                    // default size (px)
                                    width="500"
                                    height="auto"
                                />
                            </figure>
                        </a>
                        
                        <p>
                            <a href="https://orivoir.github.io/reactjs-transition-page/#/">
                                Template theme Senzu UI
                            </a>
                        </p>
                    </li>
                    
                    <li className="coffeee">
                        <h2>Coffee Ipsum</h2>
                        {/* coffeeeScreen */}
                        <figure>
                            <a href="https://orivoir.github.io/Coffeee/#/">
                                <img
                                    alt="screenshot template sadness"
                                    src={coffeeeScreen}

                                    // default size (px)
                                    width="500"
                                    height="auto"
                                />
                            </a>
                        </figure>
                        
                        <p>
                            <a href="https://orivoir.github.io/Coffeee/#/">
                                Template theme coffee UI
                            </a>
                        </p>
                    </li>
                </ul>

            </section>
        ) ;
    }
};
