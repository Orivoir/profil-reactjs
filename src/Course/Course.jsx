import React from 'react';
import Header from './../Header/Header' ;
import DocumentTitle from 'react-document-title' ;
import Main from './../Main/Main' ;
import Ytb from './../Ytb/Ytb';
import Kinogi from './../Kinogi/Kinogi';

import {Theme} from './../Theme' ;

export default class Course extends React.Component {
    
    static contextType = Theme ;

    render() {

        return (
            <DocumentTitle title="course">
                <>
                    <Header />
                    
                    <Main anchors={
                        [
                            { path: "/course#get-started", name:"get started" } ,
                            { path: "/course#kinogi", name:"kinogi" } ,
                            { path: "/course#devs", name:"developpeurs" } ,
                            { path: "/course#outpoint", name:"Veni Vedi Kinogi" }
                        ]
                    }>

                        <Ytb
                            id="get-started"
                            tip="hackathon résumé des projets"
                            src="https://www.youtube.com/embed/SntWoxaM5S0"
                            title="Hackathon <WebForce3 /> Bourgogne 03/06/18"
                        />

                        <Kinogi />
                        
                    </Main>
                </>
            </DocumentTitle>
        ) ;
    }
};
