import React from 'react';
import {Theme} from './../Theme' ;
import './NavItems.css' ;
import {Link} from 'react-router-dom' ;
import reactImg from './reactjs.png' ;
import wf3Course from './wf3-course.jpg';
import ReactTooltip from 'react-tooltip' ;

/**
* git expemples repository :  
* <https://github.com/FortAwesome/react-fontawesome/blob/master/examples/create-react-app/src/App.js#L63>
* Font icons (svg) react lib
*/
import { library } from '@fortawesome/fontawesome-svg-core' ;
import { fab } from '@fortawesome/free-brands-svg-icons' ;
import { fas } from '@fortawesome/free-solid-svg-icons' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add( fab , fas ) ;

export default class NavItems extends React.Component {
  
    static contextType = Theme ;

    render() {

        return(
            <article
                className={`
                    ${this.context.theme}
                    wrap-nav-items
                `}
            >
                <ReactTooltip type={ this.context.type } />
                <ul>
                    <li className="nav-item hackathon">
                      
                        <section className="banner-nav-item hackathon">

                            <div className="title-banner">
                                <Link to="/course#kinogi">
                                    <h2>Hackathon 2018 (Dijon)</h2>
                                    <blockquote>Projet Kinogi</blockquote>
                                </Link>
                            </div>

                            <aside>

                                <figure>

                                    <img
                                        src="https://pbs.twimg.com/media/DerNPWzWsAAY0m9.jpg"

                                        // default size ( px )
                                        width="250"
                                        height="auto"

                                        alt="kinogi present prject"
                                    />

                                    <figcaption>

                                        <p>
                                            <a

                                                target="_blank"
                                                href="https://twitter.com/WebForce3/status/1003554210254901249"
                                                data-tip="lire sur twitter ?"
                                            >

                                                <FontAwesomeIcon
                                                    icon={['fab' , 'twitter' ]}
                                                    size="sm"
                                                    style={{color: '#1da1f2'}}
                                                />&nbsp;
                                                lire plus
                                            </a>
                                        </p>
                                        
                                    </figcaption>

                                </figure>

                            </aside>                

                        </section>

                    </li>
                    
                    <li className="nav-item tools-web-dev">
                        
                        <section className="banner-nav-item tools-web-dev">
                            
                            <div className="title-banner">
                                <Link to="/future">
                                    <h2>Outils de Developement</h2>
                                    <blockquote>Git &amp; ReactJS</blockquote>
                                </Link>
                            </div>
                            
                            <aside>
                                <figure>
                                    <img 
                                          src={reactImg}

                                          // default size ( px )
                                          width="250"
                                          height="auto"
  
                                          alt="reactjs logo"
                                    />
                                    <figcaption>
                                        <p>
                                            <Link to="/future">
                                                <FontAwesomeIcon
                                                    icon={['fas' , 'book' ]}
                                                    size="sm"
                                                    style={{color:"#fff"}}
                                                />&nbsp;
                                                lire plus
                                            </Link>
                                        </p>
                                    </figcaption>
                                </figure>
                            </aside>

                        </section>

                    </li>
                    
                    <li className="nav-item wf3">
                    
                        <section className="banner-nav-item wf3">

                            <div className="title-banner">
                                <Link to="/future">
                                    <h2>WebForce3</h2>
                                    <blockquote>parcours &amp; rècit</blockquote>
                                </Link>
                            </div>
                            

                            <aside>
                                <figure>
                                    <img
                                        src={wf3Course}

                                        // Default size (px)
                                        width="250"
                                        height="auto"
                                        alt="webforce 3 course web"
                                    />

                                    
                                    <figcaption>
                                        <p>
                                            <Link to="/future">
                                                <FontAwesomeIcon
                                                    icon={['fas' , 'book' ]}
                                                    size="sm"
                                                    style={{color:"#fff"}}
                                                />&nbsp;
                                                lire plus
                                            </Link>
                                        </p>
                                    </figcaption>

                                </figure>
                            </aside>

                        </section>

                    </li>

                </ul>

            </article>
        ) ;
    }
};
