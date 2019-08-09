import React from 'react' ;
import { Link } from 'react-router-dom' ;
import ButtonTheme from './ButtonTheme';

import './Title.css' ;

export const Title = ({text , bq , logo,toggleTheme}) => (
    
    <section id="wrap-title">

        <Link to="/">
            
            <img
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