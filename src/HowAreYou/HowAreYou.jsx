import React from 'react';
import {Theme} from './../Theme';
import './HowAreYou.css' ;
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

export default class HowAreYou extends React.Component {
    
    static contextType = Theme ;

    render() {

        const yearOld = ( new Date().getFullYear() - 1997 ) ;

        return(
            <section
                id="how-are-you"
                className={`${this.context.theme}`}
            >
                <h2>
                    <FontAwesomeIcon
                        data-tip="Code is mine"
                        icon={ ['fas' , 'laptop-code' ] }
                        size="sm"
                    />&nbsp;
                    Développeur nomade
                </h2>

                <p>
                    Samuel Gaborieau {yearOld} ans développeur web&nbsp;
                    <b>
                        <span data-tip="développeur front-end et back-end">
                            fullstack
                        </span>
                        &nbsp;
                        junior
                    </b>&nbsp;
                    en expension continue<br />
                    passionné du web et de ses technologies curieux
                    d'apprendre et de transmettre<br />
                    par le biais des sites/applications
                    en libre accés éparpillé sur la&nbsp;
                    <span data-tip="le web">toile</span><br />
                    je débute mon parcours sur&nbsp;
                    <a href="https://openclassrooms.com">
                        Openclassrooms
                    </a>&nbsp;
                    à qui je remercie ça productivité de cours en ligne massif
                    en libre accès , <br />
                    j'expérimente certains concept grace au documentation
                    du web notament grâce à&nbsp;
                    <a href="https://www.mozilla.org/fr/">
                        Mozilla Developpement Network
                    </a>&nbsp;
                    puis j'intégre la formation intensif de&nbsp;
                    <a href="https://wf3.fr">
                        WebForce3 Bourgogne Franche-Compté
                    </a>&nbsp;
                    session 12 Mars - 12 Juillet ,<br />
                    où je découvre nombreuse technologie bonne pratique , outils divers<br />
                    dont <a 
                        href="https://github.com/Orivoir/"
                        data-tip="lien externe vers mon profil github"
                    >
                        <FontAwesomeIcon
                            icon={['fab','github']}
                            size="sm"
                        />&nbsp;
                        git/github
                    </a>&nbsp;
                    je décroche mes certifications de développement/intégrations web<br />
                    à l'issue de cette formation intensive où depuis je continue de<br />
                    m'auto formé en développeur "nomade" , sur le libre accés du web par passion &amp; curiosité .
                </p>

                <p>
                    à suivre ...
                </p>


            </section>    
        ) ;
    }
};
