import './App.css';
import { data } from "./model/Model"
import React, { Component } from 'react'
import TextArea from './component/TextArea';
import RadioButton from './component/RadioButton';
import CheckBox from './component/CheckBox';

class App extends Component {
  render() {
    return (
      <form>
        {  data.map((nilai, i) => {
          if (nilai.type === "essay") {
            return <TextArea soal={nilai.soal} no={i+1}/>
          } else if (nilai.type === "radio") {
            return  <RadioButton data={nilai} no={i+1}/>
          }else if(nilai.type === "checkbox") {
            return <CheckBox data={nilai} no={i+1}/>
          }

        })
        }
      </form>
    )
  }
}
export default App