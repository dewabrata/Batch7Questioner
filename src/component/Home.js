import React, { Component } from 'react'
import { data } from '../model/Model'
import FormCheckbox from './formquestion/FormCheckbox'
import FormRadio from './formquestion/FormRadio'
import FormTextArea from './formquestion/FormTextArea'
import TextArea from './TextArea'
import CheckBox from './CheckBox'
import RadioButton from './RadioButton'

export default class Home extends Component {

    constructor(props) {
        super(props)


        this.state = { questionType: "" , dataQuestion:[]}

    }
    
    onUpdateDataFromChild = (datas)=>{
    
      let dummyQuestion =  this.state.dataQuestion;
      dummyQuestion.push(datas);
      
      this.setState({dataQuestion:dummyQuestion})
    
    }

    onSelected = (event) => {

        switch (event.target.value) {

            case "1":
                this.setState({questionType:"radio"})
                break;

            case "2":
                this.setState({questionType:"checkbox"})
                break;

            case "3":
                this.setState({questionType:"textarea"})
                break


        }

    }
    
    questionForm= (typeQuestion) =>{
    switch (typeQuestion){
    
    case "radio" :
    return <FormRadio onUpdateDataFromChild = {this.onUpdateDataFromChild}/>
    
    case "checkbox" :
    return <FormCheckbox/>
    
    case "textarea" :
    return <FormTextArea/>
    
    }
    
    
    }

    funcJawab = ()=>{
    
    
    }
    
    render() {

        return (
            <div className="container">

                <div className="row">
                    <div className="col-md-4 ">
                    {this.state.dataQuestion.map((nilai, i) => {
                  if (nilai.type === "textarea") {
                    return <TextArea soal={nilai.soal} no={i + 1} key={i} funcJawab={this.funcJawab} />
                  } else if (nilai.type === "radio") {
                    return <RadioButton data={nilai} no={i + 1} key={i} funcJawab={this.funcJawab} />
                  } else if (nilai.type === "checkbox") {
                    return <CheckBox data={nilai} no={i + 1} key={i} funcJawab={this.funcJawab} />
                  }

                })
                }
                    </div>
                    <div className="col-2"></div>
                    <div className="col-md-6 ">
                        <select className="form-select" aria-label="Default select example" onChange={this.onSelected}>
                            <option >Pilih Menu Soal</option>
                            <option value="1">Soal Radio Button</option>
                            <option value="2">Soal CheckBox</option>
                            <option value="3">Soal TextArea</option>

                        </select>
                        <div>{this.questionForm(this.state.questionType)}</div>
                    </div>
                </div>

            </div>
        )
    }
}
