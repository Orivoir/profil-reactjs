import React from 'react' ;

export const themes = {
    light: 'light' ,
    dark: 'light' ,
    alt: 'alternate'
} ;

export const Theme = React.createContext( themes.light ) ;