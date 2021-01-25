import './App.css';
import { data } from "./model/Model"
import React, { Component } from 'react'
import TextArea from './component/TextArea';
import RadioButton from './component/RadioButton';
import CheckBox from './component/CheckBox';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { jawabanSoal: [] }

  }

  addJawaban = (jawaban) => {
    let newJawaban = this.state.jawabanSoal.filter((value) => { return value.soal_no !== jawaban.soal_no })

    newJawaban.push(jawaban);

    this.setState({ jawabanSoal: newJawaban });

  }

  render() {
    return (
      <div>
        <p>Isi Jawaban = {JSON.stringify(this.state.jawabanSoal)}</p>
        <form>
          {data.map((nilai, i) => {
            if (nilai.type === "essay") {
              return <TextArea soal={nilai.soal} no={i + 1} key={i} funcJawab={this.addJawaban} />
            } else if (nilai.type === "radio") {
              return <RadioButton data={nilai} no={i + 1} key={i} funcJawab={this.addJawaban} />
            } else if (nilai.type === "checkbox") {
              return <CheckBox data={nilai} no={i + 1} key={i} funcJawab={this.addJawaban} />
            }

          })
          }
        </form>
      </div>
    )
  }
}
export default App