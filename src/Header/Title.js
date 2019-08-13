import React from 'react' ;
import { Link } from 'react-router-dom' ;
import ButtonTheme from './ButtonTheme';
import './Title.css' ;
import { Theme } from './../Theme' ;

class Title extends React.Component {

    static contextType = Theme ; 

    render() {

        const {text , bq , logo,toggleTheme} = this.props ;

        return(
            
            <section id="wrap-title">

                <Link className="link-home" to="/">
                    
                    <img
                        data-tip="home"
                        data-iscapture="true"
                        src={ logo }
                        alt="logo home"
                        
                        // Default dim (px)
                        width="75"
                        height="75"
                    />

                </Link>

                <h1> { text || 'Lorem Ipsum' } </h1>
                <blockquote> { bq || 'Culpa in quis ullamco ...' } </blockquote>

                {/* component toggle provider theme button  */}
                <ButtonTheme content="thémes" img onClick={toggleTheme} />

            </section>
        ) ;
    }
} ;
export {Title} ;