import React, { Component } from 'react'
import Header from './component/Header'
import FormPertanyaan from './component/FormPertanyaan'

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
