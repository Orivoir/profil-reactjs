import React from 'react';
import Header from './../Header/Header' ;
import DocumentTitle from 'react-document-title' ;
import Main from './../Main/Main' ;
import {Theme} from './../Theme' ;
import NavItems from './../NavItems/NavItems' ;

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
                                { path: "#nav-items", name:"get started" }
                            ]
                        }
                    >
                    
                        {/* Write home content here */}

                        {/* navigable element banner */}
                        <NavItems />

                    </Main>
                </>

            </DocumentTitle>
        ) ;
    }
};
