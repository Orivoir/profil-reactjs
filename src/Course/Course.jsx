import React from 'react';
import Header from './../Header/Header' ;
import DocumentTitle from 'react-document-title' ;
import Main from './../Main/Main' ;

import {Theme} from './../Theme' ;

export default class Course extends React.Component {
    
    static contextType = Theme ;

    render() {

        return (
            <DocumentTitle title="course">
                <>
                    <Header />
                    
                    <Main anchors={[]}>
                        
                            {/* Write course content here */}
                        
                    </Main>
                </>
            </DocumentTitle>
        ) ;
    }
};
