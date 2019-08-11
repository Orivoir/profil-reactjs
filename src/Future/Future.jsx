import React from 'react' ;
import Header from './../Header/Header' ;
import DocumentTitle from 'react-document-title';
import Main from './../Main/Main' ;
import {Theme} from './../Theme' ;

export default class Future extends React.Component {
    
    static contextType = Theme ;

    render() {
 
        return (
            <DocumentTitle title="future">
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
                        
                            {/* Write future content here */}
                        
                    </Main>
                </>
            </DocumentTitle>
        ) ;
    }
};
