import React from 'react' ;
import Header from './../Header/Header' ;
import DocumentTitle from 'react-document-title';

export default class Future extends React.Component {
    
    render() {
 
        return (
            <DocumentTitle title="avenir">
                <Header />
            </DocumentTitle>
        ) ;
    }
};
