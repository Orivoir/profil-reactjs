import React from 'react';
import Header from './../Header/Header' ;
import DocumentTitle from 'react-document-title' ;
import Main from './../Main/Main' ;
import {Theme} from './../Theme' ;
import NavItems from './../NavItems/NavItems' ;
import HowAreYou from './../HowAreYou/HowAreYou' ;
import Portfolio from './../Portfolio/Portfolio';

export default class Home extends React.Component {

    static contextType = Theme ;

    render() {

        return (
            <DocumentTitle title="home">
                
                <>
                    <Header />

                    <Main
                        route="/"
                        anchors={
                            [
                                { path: "/#nav-items", name:"get started" } ,
                                { path: "/#portfolio", name:"portfolio" } ,
                                { path: "/#how-are-you", name:"qui sui-je ?" }
                            ]
                        }
                    >
                    
                        {/* Write home content here */}

                        {/* navigable element banner */}
                        <NavItems />

                        {/* Portfolio banner */}
                        <Portfolio />

                        {/* component of present me */}
                        <HowAreYou />

                    </Main>
                </>

            </DocumentTitle>
        ) ;
    }
};
