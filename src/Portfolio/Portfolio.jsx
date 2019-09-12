import React from 'react';
import {Theme} from './../Theme';
import sadnessScreen from './screenshot-sadness.png';
import senzuScreen from './screenshot-senzus.png';
import coffeeeScreen from './screenshot-coffeee.png';
import todoScreen from './screenshot-todo.png';
import rookScreen from './screenshot-rookjs.png';
import commplateScreen from './screenshot-commplate.png';
import rankScreen from './screenshot-rank.png';
import './Portfolio.css';

export default class Portfolio extends React.Component {
    
    static contextType = Theme;

    render() {

        return (
            <section id="portfolio" className={`portfolio ${this.context.theme}`}>

                <h2>Portfolio</h2>
                <blockquote>Template , UI & librairie javascript deployé avec git-pages</blockquote>
                
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
                                    alt="screenshot template senzu"
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
                                    alt="screenshot template Coffee Ipsum"
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
                    
                    <li className="todo">
                        <h2>Todo UI App</h2>
                        {/* todoScreen */}
                        <figure>
                            <a href="https://orivoir.github.io/todo-react/#/">
                                <img
                                    alt="screenshot template todo"
                                    src={todoScreen}

                                    // default size (px)
                                    width="500"
                                    height="auto"
                                />
                            </a>
                        </figure>
                        
                        <p>
                            <a href="https://orivoir.github.io/todo-react/#/">
                                Template Application theme Todo UI
                            </a>
                        </p>
                    </li>

                    
                    <li className="rook">
                        <h2>Rookjs library javascript DOM events</h2>
                        {/* todoScreen */}
                        <figure>
                            <a href="https://github.com/Orivoir/rookjs/blob/master/rookjs/rook.js">
                                <img
                                    alt="screenshot template todo"
                                    src={rookScreen}

                                    // default size (px)
                                    width="500"
                                    height="auto"
                                />
                            </a>
                        </figure>
                        
                        <p>
                            <a href="https://github.com/Orivoir/rookjs/blob/master/rookjs/rook.js">
                                Library JavaScript Events easy use , DOM easy selector , Node easy change with {"<3"} syntax<br />
                            </a>
                        </p>
                    </li>
                    
                    <li className="commplate">
                        <h2>Commplate library javascript pseudo-template expresionnal eval client side</h2>
                        {/* todoScreen */}
                        <figure>
                            <a href="https://github.com/Orivoir/commplate/blob/master/commplate/commplate.js">
                                <img
                                    alt="screenshot template todo"
                                    src={commplateScreen}

                                    // default size (px)
                                    width="500"
                                    height="auto"
                                />
                            </a>
                        </figure>
                        
                        <p>
                            <a href="https://github.com/Orivoir/commplate/blob/master/commplate/commplate.js">
                                Library JavaScript @@render::your life<br />
                            </a>
                        </p>
                    </li>
                 
                    <li className="rank">
                        <h2>fluid-rank-stars library javascript générateur de systéme de note par étoile UI avec précision 7 décimales</h2>
                        {/* todoScreen */}
                        <figure>
                            <a href="https://github.com/Orivoir/fluid-rank-stars/blob/master/fluid-rank-stars/script.js">
                                <img
                                    alt="screenshot template todo"
                                    src={rankScreen}

                                    // default size (px)
                                    width="500"
                                    height="auto"
                                />
                            </a>
                        </figure>
                        
                        <p>
                            <a href="https://github.com/Orivoir/fluid-rank-stars/blob/master/fluid-rank-stars/script.js">
                            This is an micro-library JavaScript && CSS3 define and custom your rank system thinks only finally onValid logic {"</>"}
                            </a>
                        </p>
                    </li>

                </ul>

            </section>
        ) ;
    }
};
