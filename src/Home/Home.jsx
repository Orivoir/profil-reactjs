import React from 'react';
import Header from './../Header/Header' ;
import DocumentTitle from 'react-document-title' ;

export default class Home extends React.Component {

    render() {

        return (
            <DocumentTitle title="accueil">
                <Header />
            </DocumentTitle>
        ) ;
    }
};
