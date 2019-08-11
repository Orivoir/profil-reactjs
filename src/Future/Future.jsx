import React from 'react' ;
import Header from './../Header/Header' ;
import DocumentTitle from 'react-document-title';
import Main from './../Main/Main' ;

export default class Future extends React.Component {
    
    render() {
 
        return (
            <DocumentTitle title="avenir">
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
                    
                        {/* Write future content here */}
                    
                    </Main>

            </DocumentTitle>
        ) ;
    }
};
