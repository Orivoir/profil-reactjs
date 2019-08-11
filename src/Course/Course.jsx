import React from 'react';
import Header from './../Header/Header' ;
import DocumentTitle from 'react-document-title' ;
import Main from './../Main/Main' ;

export default class Course extends React.Component {
    
    render() {

        return (
            <DocumentTitle title="flux actif">
                <Header />
                
                <Main anchors={[]}>
                    
                        {/* Write course content here */}
                    
                </Main>

            </DocumentTitle>
        ) ;
    }
};
