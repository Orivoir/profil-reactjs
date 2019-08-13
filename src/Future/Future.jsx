import React from 'react' ;
import Header from './../Header/Header' ;
import DocumentTitle from 'react-document-title';
import Main from './../Main/Main' ;
import {Theme} from './../Theme' ;
import ToolsDev from './../ToolsDev/ToolsDev';

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
                                    { path: "#abc", name:"get started" } ,
                                    { path: "#tools-dev", name:"outils dev" }
                                ]
                            }
                        >
                        
                            {/* Write future content here */}

                            <ToolsDev />
                        
                    </Main>
                </>
            </DocumentTitle>
        ) ;
    }
};
