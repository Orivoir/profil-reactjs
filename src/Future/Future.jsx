import React from 'react' ;
import Header from './../Header/Header' ;
import DocumentTitle from 'react-document-title';
import Main from './../Main/Main' ;
import {Theme} from './../Theme' ;
import ToolsDev from './../ToolsDev/ToolsDev';
import WF3 from './../WF3/WF3';
import Contact from './../Contact/Contact' ;

export default class Future extends React.Component {
    
    static contextType = Theme ;

    render() {
 
        return (
            <DocumentTitle title="web étudiant">
                <>
                    <Header />

                    <Main
                            route="/future"
                            anchors={
                                [
                                    { path: "#abc", name:"get started" } ,
                                    { path: "#tools-dev", name:"outils dev" } ,
                                    { path: "#wf3", name:"WebForce3" } ,
                                    { path: "#certif-integ", name:"Intégration" } ,
                                    { path: "#certif-dev", name:"Développement" }
                                ]
                            }
                        >
                        
                            {/* Write future content here */}
                            
                            <ToolsDev />
                            
                            <WF3 />
                            
                            <Contact />
                    </Main>
                </>
            </DocumentTitle>
        ) ;
    }
};
