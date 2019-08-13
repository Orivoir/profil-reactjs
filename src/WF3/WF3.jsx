import React from 'react' ;
import {Theme} from './../Theme';
import {Link} from 'react-router-dom';
import Iframe from 'react-iframe';
import './WF3.css';
import integ from './Certification_Intégration.pdf';
import dev from './Certification_Développement.pdf';

const Code = React.Component ;

export default class WF3 extends Code {
    
    static contextType = Theme ;

    render() {

        return (
            <section
                className={`
                    ${this.context.theme}
                    wf3
                `}
                id="wf3"
            >

                <div className="wrap-title">
                    <h2>
                        {"<WebForce3 />"}
                    </h2>
                    <blockquote>parcours &amp; récit</blockquote>
                </div>

                <p>
                    j'intégre WebForce 3 en juillet 2018 ( Bourgogne Franche-Compté )<br />
                    pour suivre une formation <b>intensive</b> de 3 mois &frac12;<br />
                    où j'apprend en accéléré de nombreuse technologie du développement web<br />
                    autant les bases fondamentale ( HTML5 &amp; CSS3 ) ainsi que ses bonne pratique
                    accéssibilité , réferencement ,&nbsp;
                    mais aussi des environement plus poussé<br />
                    <b>ReactJS &amp; Symfony 4</b><br />
                    ainsi que l'incontournable outils de collaboration <b>Git/Github</b> , <br />
                    à l'issue de cette formation je décide d'approfondir cet technologie en&nbsp;
                    <Link to="/">
                       développeur "nomade"
                    </Link><br />
                    grace au documentation du web notament grâce à Mozilla Developpement Network,&nbsp;aux
                    tutoriel Openclassrooms , Khan Academy , Solo learn , ...&nbsp;
                    et autres <br />
                    aujourd'hui désireux d'intégré une équipe de développement et/où  de contribué à des projets en situation réelle<br />
                    je deploie cette application de présentation de mon parcours .
                </p>

                <div id="certif">
                    <p id="certif-integ">
                        <h3>Certification Développement</h3>
                        <Iframe
                            src={ dev }
                        />
                    </p>

                    <p id="certif-dev">
                        <h3>Certification Intégration</h3>
                        <Iframe
                            src={ integ }
                        />
                    </p>
                
                </div>

            </section>
        ) ;
    }
};
