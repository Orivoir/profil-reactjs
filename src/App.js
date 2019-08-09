import React from 'react';
import './App.css';
import { Route , Switch } from 'react-router-dom';
import { Theme , themes } from './Theme' ;
import { routes } from './routes' ;

export default class App extends React.Component {
  
  state = {
    theme: themes.dark,
    tip: themes.light
  } ;

  constructor( props ) {

    super( props ) ;

    // Define state function change the current theme
    this.state.toggleTheme = change => {

      this.setState({ theme: change } ) ;

      this.setState( state => ( {
      
        tip: state.theme !== 'alternate' ? (state.theme === 'light' ? 'dark' : 'light' ) : 'success' 
      
      } ) ) ;

    }

  }

  render() {

    return (
      <Theme.Provider value={this.state} >
          <Switch>
            
            {/* Dynamic define routes */}
            {
              routes.map( (route,key) => (
                <Route key={key} exact={route.exact} path={route.path} component={route.render} />
              ) )
            }

          </Switch>
      </Theme.Provider>
    );
  }

} ;
