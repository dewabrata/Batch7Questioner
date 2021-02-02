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


        this.state = { questionType: "", dataQuestion: [], editQuestion:{} }

    }
    
    componentDidMount(){
        this.props.updateLinkStatus(["","disable","",""]);
    }

    onUpdateDataFromChild = (datas) => {

        let dummyQuestion = this.state.dataQuestion;
        dummyQuestion.push(datas);

        this.setState({ dataQuestion: dummyQuestion })

    }

    onSelected = (event) => {

        switch (event.target.value) {

            case "1":
                this.setState({ questionType: "radio" })
                break;

            case "2":
                this.setState({ questionType: "checkbox" })
                break;

            case "3":
                this.setState({ questionType: "textarea" })
                break


        }

    }

    questionForm = (typeQuestion) => {
        switch (typeQuestion) {

            case "radio":
                return <FormRadio onUpdateDataFromChild={this.onUpdateDataFromChild} editValue = {this.state.editQuestion} />

            case "checkbox":
                return <FormCheckbox  onUpdateDataFromChild={this.onUpdateDataFromChild} editValue = {this.state.editQuestion}/>

            case "textarea":
                return <FormTextArea onUpdateDataFromChild={this.onUpdateDataFromChild} editValue = {this.state.editQuestion} />

        }


    }

    funcJawab = () => {
    

    }
    
    deleteData =(event)=>{
    console.log("delele data "+JSON.stringify(this.state.dataQuestion[event.target.value]))
    let dummyQuestion = this.state.dataQuestion;
    dummyQuestion.splice(event.target.value,1);

    this.setState({ dataQuestion: dummyQuestion })
    
    }
    
    updateData = (event)=>{
        console.log("update  data " +this.state.dataQuestion[event.target.value])
        
        this.setState({editQuestion:this.state.dataQuestion[event.target.value]},()=>{
           console.log(JSON.stringify( this.state.editQuestion))
        })
    }

    render() {

        return (
            <div className="container">

                <div className="row">
                    <div className="col-md-4 ">
                       
                        {this.state.dataQuestion.map((nilai, i) => {
                            if (nilai.type === "essay") {
                                return <div className="card"><div className="card-header"><button value={i} onClick={this.deleteData}>Remove</button><button value={i}  onClick={this.updateData}>Edit</button></div><div className="card-body"><TextArea soal={nilai.soal} no={i + 1} key={i} funcJawab={this.funcJawab} /> </div></div>
                            } else if (nilai.type === "radio") {
                                return  <div className="card"><div className="card-header"><button value={i}  onClick={this.deleteData}>Remove</button><button value={i} onClick={this.updateData}>Edit</button></div><div className="card-body"><RadioButton data={nilai} no={i + 1} key={i} funcJawab={this.funcJawab} /> </div></div>
                            } else if (nilai.type === "checkbox") {
                                return <div className="card"><div className="card-header"><button value={i}  onClick={this.deleteData}>Remove</button><button value={i} onClick={this.updateData}>Edit</button></div><div className="card-body"><CheckBox data={nilai} no={i + 1} key={i} funcJawab={this.funcJawab} /></div></div>
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
