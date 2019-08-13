import React from 'react';
import {Theme} from './../Theme' ;
import './Kinogi.css';
import { Figcaption as Figc } from './Figcaption';

const VeniVediKinogi = React.Component ; // 😎 

export default class Kinogi extends VeniVediKinogi {
    
    static contextType = Theme ;

    render() {

        return(

            <article
                className={
                    `
                    ${this.context.theme}
                    kinogi
                    `
                }
                id="kinogi"
            >

                <section class="present" >

                    <h2>
                        Le projet <b>Kinogi</b> est la rencontre entre "la gazette d'Harry Potter" et un cadre photo numérique connecté !
                    </h2>

                    <aside>
                        <figure>
                            <Figc
                                src="https://twitter.com/WebForce3/status/1002839629018619905"
                                before={<><b>Kinogi</b> presentation de Charles Baudier<br /></>}
                            />
                        
                            <img
                                src="https://pbs.twimg.com/media/DerNPWzWsAAY0m9.jpg"
                                alt="kinogi present project"
                                // default size (px)
                                width="650"
                                height="auto"
                            />
                        </figure>

                    </aside>

                </section>

                <section class="devs" id="devs" >
                    <h2>
                        L'équipe de développeurs du projet
                        <ul>
                            <li>
                                <p
                                    data-tip="developpeur fullstack"
                                >
                                    Anthony Demon
                                </p>
                            </li>
                            
                            <li>
                                <p
                                    data-tip="developpeur back-end"
                                >
                                    Samuel Gaborieau
                                </p>
                            </li>
                            <li>
                                <p
                                    data-tip="developpeur front-end"
                                >
                                    Philippe Mai
                                </p>
                            </li>
                            <li>
                                <p
                                    data-tip="developpeur front-end"
                                >
                                    Audrey Donjon
                                </p>
                            </li>
                            <li>
                                <p
                                    data-tip="developpeur back-end"
                                >
                                    Pierre Laurent Volot
                                </p>
                            </li>
                        </ul>
                    </h2>

                    <aside>
                        <figure>
                            <Figc
                                src="https://twitter.com/WebForce3/status/1002839629018619905"
                                before={<><b>Kinogi</b> les développeurs<br /></>}
                            />
                            <img
                                src="https://pbs.twimg.com/media/DerNRYRW4AITlHC.jpg"
                                alt="kinogi present project"
                                // default size (px)
                                width="650"
                                height="auto"
                            />
                        </figure>

                    </aside>

                </section>

                <section class="outpoint" id="outpoint">
                  
                    <h2>
                        Veni Vedi <b>Kinogi</b>
                    </h2>
                    
                    <aside>
                        <figure>

                            <Figc
                                src="https://twitter.com/WebForce3/status/1003554210254901249"
                                before={<><b>Kinogi</b> remise des prix<br /></>}
                            />
                        
                            <img
                                src="https://pbs.twimg.com/media/De1XJLbXUAARdvJ.jpg"
                                alt="kinogi present project"
                                // default size (px)
                                width="650"
                                height="auto"
                            />
                        </figure>

                    </aside>

                </section>
            </article>
            
        ) ;
    }
};
