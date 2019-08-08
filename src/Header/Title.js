import React from 'react' ;
import { Link } from 'react-router-dom' ;

export const Title = ({text , bq , logo}) => (
    
    <section id="wrap-title">

        <Link to="/">
            <img src={ logo } alt="logo home" />
        </Link>

        <h1> { text || 'Lorem Ipsum' } </h1>
        <blockquote> { bq || 'Culpa in quis ullamco ...' } </blockquote>

    </section>
) ;