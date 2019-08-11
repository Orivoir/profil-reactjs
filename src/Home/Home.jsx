import React from 'react';
import Header from './../Header/Header' ;
import DocumentTitle from 'react-document-title' ;
import Main from './../Main/Main' ;
import {Theme} from './../Theme' ;

export default class Home extends React.Component {

    static contextType = Theme ;

    render() {

        return (
            <DocumentTitle title="home">
                
                <>
                    <Header />

                    <Main
                        // Factory anchors
                        anchors={
                            [
                                { path: "#abc", name:"abc" },
                                { path: "#def", name: "def ijk" }
                            ]
                        }
                    >
                    
                        {/* Write home content here */}

                    
                    </Main>
                </>

            </DocumentTitle>
        ) ;
    }
};
