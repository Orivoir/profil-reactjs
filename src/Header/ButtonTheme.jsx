import React from 'react';

export default class ButtonTheme extends React.Component {
    
    render() {

        const { content , toggleTheme } = this.props ;

        return(
            <>
                <button onClick={toggleTheme}>
                    {content}
                </button>
            </>
        ) ;
    }
};
