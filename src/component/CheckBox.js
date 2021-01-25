import React, { Component } from 'react';

class CheckBox extends Component {
  constructor(props) {
  super(props);
  
  this.state = {jawaban:[]}
  
  }
  
  eventHandler = (event) =>{
  
   
    if(event.target.checked){
    
       this.addDataJawaban(event.target.value);
    }else{
        this.removeDataJawaban(event.target.value);
    
    }
  
  }
  
  addDataJawaban = (nilai)=>{
    let jawab = this.state.jawaban;
    jawab.push(nilai);
    this.setState({jawaban:jawab})
    this.addScore(jawab);

  }
  
  removeDataJawaban = (nilai)=>{
    let jawab = this.state.jawaban.filter((value)=>{
    return value !== nilai
    })
   
    this.setState({jawaban:jawab})
    
     this.addScore(jawab);
    
  }
  
   addScore = (jawab)=>{
   
    
      
      this.props.funcJawab({
        soal_no : this.props.no,
        jawaban :jawab
      
      })
   
   }
  
  
    render() {
        return (
            <div>
                <label>{this.props.no}.  {this.props.data.soal}</label><p></p>
                {this.props.data.option.map((options,i) => {

                    return <div className="form-check" key={i}>
                        <input className="form-check-input" type="checkbox" value={options} id={"soal"+this.props.no} name={"soal"+this.props.no} onChange={this.eventHandler} />
                        <label className="form-check-label" htmlFor="defaultCheck1">
                           {options}
                        </label>
                    </div>


                })}
               
               {/* <p>jawabannya adalah {this.state.jawaban.map((options)=>`${options},`)}</p><p></p> */}

            </div>
        );
    }
}

export default CheckBox;