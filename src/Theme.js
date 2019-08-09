import React from 'react' ;

export const themes = {
    light: 'light' ,
    dark: 'dark' ,
    alt: 'alternate'
} ;

export const Theme = React.createContext( {
    theme: themes.light
} ) ;