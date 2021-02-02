import React, { Component } from 'react'

export default class FormTextArea extends Component {
    constructor(props) {
        super(props)

        
        this.state = {
          type :"essay",
          soal :"",
          kunci :"",
          score : 0
          




        }

    }

    
    eventHandler = (event) =>{
        let name = event.target.name
        if(name==="score"){
            this.setState({ [name]: parseInt(event.target.value) });
        }
        this.setState({ [name]: event.target.value });
    
        
        
    
    }

    createObjectData = () => {
    
       console.log(JSON.stringify(this.state))
       this.props.onUpdateDataFromChild(this.state)


    };

    render() {
        return (
            <div>
                <div className="mb-3">
                   
                    <label htmlFor="exampleFormControlInput4" className="form-label">Soal</label>
                    <input type="text" className="form-control" id="soal" name ="soal" placeholder="Masukan Soal" onChange={this.eventHandler} />
                </div>
                <div className="mb-3">
                    
                    <label htmlFor="exampleFormControlInput4" className="form-label">Kunci Jawaban</label>
                    <input type="text" className="form-control" id="kunci" name ="kunci" placeholder="Masukan Kunci Jawaban" onChange={this.eventHandler}/>
                </div>
                <div className="mb-3">
                    
                    <label htmlFor="exampleFormControlInput4" className="form-label">Score</label>
                    <input type="text" className="form-control" id="score" name ="score" placeholder="Masukan Score Nilai" onChange={this.eventHandler} />
                </div>
                <div className="mb-3">
                    <button className="primary" onClick={this.createObjectData } >Submit</button>
                </div>
            </div>
        )
    }
}
