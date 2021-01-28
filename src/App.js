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
import CategoryQuiz from './component/CategoryQuiz';

export default class App extends Component {
  render() {
    return (
      <Router>
      <div>
      
         <Header/>
         <Switch>
         <Route path="/question">
         <CategoryQuiz/>
          </Route>
          <Route path="/aboutus">
         <AboutQuestion/>
          </Route>
          <Route path="/attemptquiz/:type">
         <FormPertanyaan/>
          </Route>
         </Switch>
         
      </div>
      </Router>
    )
  }
}
