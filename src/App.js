import React, { Component } from 'react'
import Header from './component/Header'
import FormPertanyaan from './component/FormPertanyaan'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <FormPertanyaan/>
      </div>
    )
  }
}
