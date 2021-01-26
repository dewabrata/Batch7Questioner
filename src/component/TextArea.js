import React, { Component } from 'react';

class TextArea extends Component {
   constructor(props) {
   super(props);
   this.state = {jawaban:"",code:""}
   this.inputText ="";
   
   
   
    
    }

    
    eventHandler = (event) =>{
     
     //  this.setState({jawaban:event.target.value})
     //  
     this.inputText = event.target.value;
     
    }
    
    addScore = (jawab)=>{
   
    
      
        this.props.funcJawab({
          soal_no : this.props.no,
          jawaban :jawab
        
        })
     
     }
     
     submitCode = () =>{
        const fn = new Function(this.inputText)
        const resultFn = fn();
        this.setState({code:resultFn})
        this.addScore(resultFn)
     }
     
    render() {
        return (    
                <div className="form-group">
                   
                    <label htmlFor="exampleFormControlTextarea1">{this.props.no}. {this.props.soal}</label>
                    <p>Jawaban :</p>
                    <div className="container p-3 mb-2 bg-light text-dark">{this.state.code}</div>
                    <textarea onChange={this.eventHandler} className="form-control" id={"soal"+this.props.no} name={"soal"+this.props.no} rows="3"></textarea>
                    <button type="button" className="btn btn-primary" onClick={this.submitCode} >Submit</button>
                </div>
            
        );
    }
}

export default TextArea;