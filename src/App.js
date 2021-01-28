import React, { Component } from 'react'
import Header from './component/Header'
import FormPertanyaan from './component/FormPertanyaan'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AboutQuestion from './component/AboutQuestion';

export default class App extends Component {
  render() {
    return (
      <Router>
      <div>
      
         <Header/>
         <Switch>
         <Route path="/question">
         <FormPertanyaan/>
          </Route>
          <Route path="/aboutus">
         <AboutQuestion/>
          </Route>
         </Switch>
         
      </div>
      </Router>
    )
  }
}
