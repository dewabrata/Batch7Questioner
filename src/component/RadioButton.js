import React, { Component } from 'react';

class RadioButton extends Component {
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
         <div>
         <label>{this.props.no}. {this.props.data.soal}</label><p></p>
            <div className="form-check">
                <input onChange={this.eventHandler} className="form-check-input" type="radio" name={"soal"+this.props.no} id={"soal"+this.props.no} value="a"  ></input>
                    <label className="form-check-label" htmlFor={"soal"+this.props.no}>
                        {this.props.data.a}
                    </label>
            </div>
            <div className="form-check">
                <input onChange={this.eventHandler} className="form-check-input" type="radio" name={"soal"+this.props.no} id={"soal"+this.props.no} value="b"  />
                    <label className="form-check-label" htmlFor={"soal"+this.props.no}>
                        {this.props.data.b}
                    </label>
            </div>
            <div className="form-check">
                <input onChange={this.eventHandler} className="form-check-input" type="radio" name={"soal"+this.props.no} id={"soal"+this.props.no} value="c"  />
                    <label className="form-check-label" htmlFor={"soal"+this.props.no}>
                        {this.props.data.c}
                    </label>
            </div>
            <div className="form-check">
                <input onChange={this.eventHandler} className="form-check-input" type="radio" name={"soal"+this.props.no} id={"soal"+this.props.no} value="d"  />
                    <label className="form-check-label" htmlFor={"soal"+this.props.no}>
                        {this.props.data.d}
                    </label>
            </div>
            {/* <label> Isinya adalah {this.state.jawaban}. </label><p></p> */}
         </div>  
        );
    }
}

export default RadioButton;