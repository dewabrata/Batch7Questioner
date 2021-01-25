import React, { Component } from 'react';

class TextArea extends Component {
   constructor(props) {
   super(props);
   this.state = {jawaban:""}
    
    }
    
    eventHandler = (event) =>{
   
       this.setState({jawaban:event.target.value})
       this.addScore(event.target.value)
    }
    
    addScore = (jawab)=>{
   
    
      
        this.props.funcJawab({
          soal_no : this.props.no,
          jawaban :jawab
        
        })
     
     }
     
    render() {
        return (
                
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">{this.props.no}. {this.props.soal}</label><p></p>
                    <textarea onChange={this.eventHandler} className="form-control" id={"soal"+this.props.no} name={"soal"+this.props.no} rows="3"></textarea>
                </div>
            
        );
    }
}

export default TextArea;