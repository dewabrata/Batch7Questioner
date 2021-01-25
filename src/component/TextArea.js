import React, { Component } from 'react';

class TextArea extends Component {
   constructor(props) {
   super(props);
 
   }
    render() {
        return (
                
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">{this.props.no}. {this.props.soal}</label><p></p>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            
        );
    }
}

export default TextArea;