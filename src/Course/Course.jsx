import React from 'react';
import Header from './../Header/Header' ;
import DocumentTitle from 'react-document-title' ;

export default class Course extends React.Component {
    
    render() {

        return (
            <DocumentTitle title="flux actif">
                <Header />
            </DocumentTitle>
        ) ;
    }
};
