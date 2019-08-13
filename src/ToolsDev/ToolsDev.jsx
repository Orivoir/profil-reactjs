import React from 'react' ;
import {Theme} from './../Theme' ;
import reactjsImg from './reactjs.png' ;
import githubImg from './git-github.png'
import './ToolsDev.css' ;

export default class ToolsDev extends React.Component {
    
    static contextType = Theme ;

    state = {

        down: false ,
        position: 0

    } ;

    constructor(props) {

        super( props ) ;

        this.currentDown = this.currentDown.bind( this ) ;
        this.currentUp = this.currentUp.bind( this ) ;
        this.currentMove = this.currentMove.bind( this ) ;
    }

    
    /**
     * @bindMethod [constructor]
     * @param {SyntheticEvent} e 
     */
    currentUp( e ) {

        const section = document.querySelector('#tools-dev section[data-current="true"]');

        if( !section ) return ;

        section.style.left = "0px" ;

        if( this.state.position > 55 || this.state.position < -55 ) {

            
            const newSection = document.querySelector('#tools-dev section[data-current="false"]') ;
            
            section.setAttribute( 'data-current' , 'false' ) ;
            newSection.setAttribute( 'data-current' , 'true' ) ;

            newSection.classList.remove('hide') ;
            section.classList.add('hide') ;
            section.style.opacity = '1' ;

            section.removeEventListener('mousedown' , this.currentDown ) ;
            newSection.addEventListener('mousedown' , this.currentDown ) ;
        }

        
        this.setState( { down: false , position: false } ) ;
    }
    
    /**
     * @bindMethod [constructor]
     * @param {SyntheticEvent} e 
     */
    currentMove( e ) {

        const {down} = this.state ;

        if( down ) {

            
            const
                section = document.querySelector('#tools-dev section[data-current="true"]') ;
            ;

            if( !section ) return ;

            if( (this.state.position < -55 && e.movementX < 0 ) || (this.state.position > 55 && e.movementX > 0 ) ) {

                section.style.opacity = '.5' ;
                return ;
            } else {
                
                section.style.opacity = '1' ;
            }

            this.setState( state => ({
                position: ( state.position + e.movementX )
            } ) ) ;

            section.style.left = this.state.position + 'px' ;
        }
    }

    /**
     * @bindMethod [constructor]
     * @param {SyntheticEvent} e 
     */
    currentDown(e) {

        this.setState( { down: true } ) ;
    }

    /**
     * @exec to install of component
     */
    componentDidMount(){

        const
            section = document.querySelector('#tools-dev section[data-current="true"]') ;
        ;

        if( !section ) return ;

        section.addEventListener('mousedown' , this.currentDown ) ;
        document.addEventListener('mouseup' , this.currentUp ) ;
        document.addEventListener('mousemove' , this.currentMove ) ;
    }

    /**
     * @exec to uninstall of component
     */
    componentWillMount() {

        /**
         * free events attach on the phisyque DOM
         */
        document.removeEventListener('mouseup' , this.currentUp ) ;
        document.removeEventListener('mousemove' , this.currentMove ) ;
    }

    render() {

        return(
            <article
                id="tools-dev"
                className={
                    `${this.context.theme}`
                }
            >

                <section data-current="true" className="tools-dev reactjs" id="reactjs">

                    <aside>
                        <figcaption></figcaption>
                        <img
                            src={reactjsImg}
                            alt="logo react js"
                            // default size (px)
                            width="350"
                            height="auto"
                        />
                    </aside>

                    <div className="content">
                        <div className="wrap-title">
                            <h2>React</h2>
                            <blockquote>Une bibliothèque JavaScript pour créer des interfaces utilisateurs</blockquote>
                        </div>

                        <p>
                            cette&nbsp;
                            <span data-tip="application de profil">homepage</span>&nbsp;
                            et développé avec le&nbsp;
                            <a 
                                href="https://fr.reactjs.org/docs/create-a-new-react-app.html#___gatsby"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                CRA
                            </a>&nbsp;
                            de react et deployé avec&nbsp;
                            <a
                                href="https://pages.github.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                git-pages
                            </a>,
                            <br />
                            j'ai découvert l'environement de react en formation&nbsp;
                            chez WebForce 3 en Juillet 2018 ,<br />
                            depuis j'éxperimente entre autre cette technologie<br />
                            au travers de divers applications&nbsp;
                            <span data-tip="application côté navigateur">client</span>
                            ,<br />
                            désireux d'intégré une équipe de développement et/où&nbsp;
                            de contribué à un projet en situation réelle&nbsp;
                            j'apprend l'utilisation de l'outil de collaboration open source&nbsp;
                            de&nbsp;
                            <a href="/future#git">
                                git/github
                            </a>

                        </p>    
                    </div>
                </section>
                
                <section data-current="false" className="reversed tools-dev git hide" id="git">
            
                    <aside>
                        <figcaption></figcaption>
                        <img
                            src={githubImg}
                            alt="logo git et github"
                            // default size (px)
                            width="350"
                            height="auto"
                        />
                    </aside>

                    <div className="content">
                        <div className="wrap-title">
                            <h2>Git / Github</h2>
                            <blockquote>
                                Un outils pour tous les dominé&nbsp;
                                <span
                                    role="img"
                                    aria-label="smiley hell"
                                >
                                    😈
                                </span>
                            </blockquote>
                        </div>

                        <p>
                            cette&nbsp;
                            <span data-tip="application de profil">homepage</span>&nbsp;
                            et développé avec le&nbsp;
                            <a 
                                href="https://fr.reactjs.org/docs/create-a-new-react-app.html#___gatsby"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                CRA
                            </a>&nbsp;
                            de react et deployé avec&nbsp;
                            <a
                                href="https://pages.github.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                git-pages
                            </a>,
                            <br />
                            j'ai découvert l'environement de react en formation&nbsp;
                            chez WebForce 3 en Juillet 2018 ,<br />
                            depuis j'éxperimente entre autre cette technologie<br />
                            au travers de divers applications&nbsp;
                            <span data-tip="application côté navigateur">client</span>
                            ,<br />
                            désireux d'intégré une équipe de développement et/où&nbsp;
                            de contribué à un projet en situation réelle&nbsp;
                            j'apprend l'utilisation de l'outil de collaboration open source&nbsp;
                            de&nbsp;
                            <a href="/future#git">
                                git/github
                            </a>

                        </p>    
                    </div>

                </section>


            </article>
        ) ;
    }
};
