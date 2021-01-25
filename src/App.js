import './App.css';
import { data } from "./model/Model"
import React, { Component } from 'react'
import TextArea from './component/TextArea';
import RadioButton from './component/RadioButton';
import CheckBox from './component/CheckBox';

class App extends Component {

  constructor(props) {
  super(props);
  this.state = {jawabanSoal:[]}
  
  }
  
  addJawaban =(jawaban)=>{
   console.log("jawabannya"+ jawaban)
  let tempJawab = this.state.jawabanSoal;
  tempJawab.push(jawaban);
  
  this.setState({jawabanSoal: tempJawab});
  
  }

  render() {
    return (
    <div>
     <p>Isi Jawaban = {this.state.jawabanSoal.map((jawab)=> JSON.stringify(jawab))}</p>
      <form>
        {  data.map((nilai, i) => {
          if (nilai.type === "essay") {
            return <TextArea soal={nilai.soal} no={i+1} key={i} funcJawab = {this.addJawaban}/>
          } else if (nilai.type === "radio") {
            return  <RadioButton data={nilai} no={i+1} key={i} funcJawab = {this.addJawaban}/>
          }else if(nilai.type === "checkbox") {
            return <CheckBox data={nilai} no={i+1} key={i} funcJawab = {this.addJawaban}/>
          }

        })
        }
      </form>
      </div>
    )
  }
}
export default App