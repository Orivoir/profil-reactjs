import React from 'react';
import Header from './../Header/Header' ;
import DocumentTitle from 'react-document-title' ;
import Main from './../Main/Main' ;

export default class Home extends React.Component {

    render() {

        return (
            <DocumentTitle title="accueil">
                
                <>
                    <Header />

                    <Main
                        anchors={[{path:"/#abc" , name:"abc" },{path:"/#def",name:"def"}]}
                    >
                        <h1>Lorem Ipsum</h1>
                    </Main>
                </>

            </DocumentTitle>
        ) ;
    }
};
