import React, { Component } from 'react';

class TextArea extends Component {
   constructor(props) {
   super(props);
   this.state = {jawaban:""}
    
    }
    
    eventHandler = (event) =>{
   
       this.setState({jawaban:event.target.value})
    
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