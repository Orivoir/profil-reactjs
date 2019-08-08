import React from 'react';
import './App.css';
import { Route , Switch } from 'react-router-dom'

import { Theme , themes } from './Theme' ;

import { routes } from './routes' ;

export default class App extends React.Component {
  
  state = {
    theme: themes.light
  } ;

  render() {

    const {theme} = this.state ;

    return (
      <Theme.Provider value={theme} >
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
