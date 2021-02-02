import React, { Component } from 'react'

export default class FormCheckbox extends Component {
    constructor(props) {
        super(props)

        
        this.state = {
          type :"checkbox",
          soal :"",
          a :"",
          b:"",
          c:"",
          d:"",
          option:[],
          kunci :[],
          score : 0
          




        }

    }

    
    eventHandler = (event) =>{
        let name = event.target.name
        if(name==="score"){
            this.setState({ [name]: parseInt(event.target.value) });
        }else if(name==="kunci"){
            this.setState({ [name]: event.target.value.split(",")});
        }else{
        
        this.setState({ [name]: event.target.value });
        }
        
        
    
    }

    createObjectData = () => {
       let dummyoption = [this.state.a,this.state.b,this.state.c,this.state.d];
       console.log(dummyoption);
       this.setState({ option: dummyoption},()=>{
       console.log(JSON.stringify(this.state))
       this.props.onUpdateDataFromChild(this.state)
       
       })
      


    };
    render() {
        return (
            <div>
                <div className="mb-3">

                    <label htmlFor="exampleFormControlInput1" className="form-label">Soal</label>
                    <input type="text" className="form-control" name="soal" placeholder="Masukan Soal" onChange={this.eventHandler} />
                </div>
                <div className="mb-3">

                    <label htmlFor="exampleFormControlInput1" className="form-label">Jawaban A</label>
                    <input type="text" className="form-control" name="a" placeholder="Jawaban A" onChange={this.eventHandler} />
                </div>
                <div className="mb-3">

                    <label htmlFor="exampleFormControlInput2" className="form-label">Jawaban B</label>
                    <input type="text" className="form-control" name="b" placeholder="Jawaban B" onChange={this.eventHandler} />
                </div>
                <div className="mb-3">

                    <label htmlFor="exampleFormControlInput3" className="form-label">Jawaban C</label>
                    <input type="text" className="form-control" name="c" placeholder="Jawaban C" onChange={this.eventHandler} />
                </div>
                <div className="mb-3">

                    <label htmlFor="exampleFormControlInput4" className="form-label">Jawaban D</label>
                    <input type="text" className="form-control" name="d" placeholder="Jawaban D" onChange={this.eventHandler}/>
                </div>
                <div className="mb-3">

                    <label htmlFor="exampleFormControlInput4" className="form-label">Kunci Jawaban</label>
                    <input type="text" className="form-control" name="kunci" placeholder="Masukan Kunci Jawaban" onChange={this.eventHandler}/>
                </div>
                <div className="mb-3">

                    <label htmlFor="exampleFormControlInput4" className="form-label">Score</label>
                    <input type="text" className="form-control" name="score" placeholder="Masukan Score Nilai" onChange={this.eventHandler}/>
                </div>
                <div className="mb-3">
                    <button className="primary" onClick={this.createObjectData } >Submit</button>
                </div>
            </div>        )
    }
}
