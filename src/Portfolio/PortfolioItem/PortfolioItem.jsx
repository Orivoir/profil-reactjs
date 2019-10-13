import React from 'react';

function PortfolioItem({
    title,
    target,
    img,
    describe,
    cls
}) {

    return (
        <li className={cls}>
            <h2>{title}</h2>
            <figure>
            
                <a href={target}>
                
                    <img
                        alt="screenshot template sadness"
                        src={img}

                        // default size (px)
                        width="500"
                        height="auto"
                    />
                </a>

            </figure>
            
            <p>
                <a href={target}>
                    {describe}
                </a>
            </p>
        </li>
    );
}

export default PortfolioItem;