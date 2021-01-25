import React, { Component } from 'react';

class RadioButton extends Component {
    constructor(props) {
    super(props);
    }
    render() {
        return (
         <div>
         <label>{this.props.no}. {this.props.data.soal}</label><p></p>
            <div className="form-check">
                <input class="form-check-input" type="radio" name={"soalradio"+this.props.no} id={"soalradio"+this.props.no} value="option1"  />
                    <label class="form-check-label" for={"soalradio"+this.props.no}>
                        {this.props.data.a}
                    </label>
            </div>
            <div className="form-check">
                <input class="form-check-input" type="radio" name={"soalradio"+this.props.no} id={"soalradio"+this.props.no} value="option1"  />
                    <label class="form-check-label" for={"soalradio"+this.props.no}>
                        {this.props.data.b}
                    </label>
            </div>
            <div className="form-check">
                <input class="form-check-input" type="radio" name={"soalradio"+this.props.no} id={"soalradio"+this.props.no} value="option1"  />
                    <label class="form-check-label" for={"soalradio"+this.props.no}>
                        {this.props.data.c}
                    </label>
            </div>
            <div className="form-check">
                <input class="form-check-input" type="radio" name={"soalradio"+this.props.no} id={"soalradio"+this.props.no} value="option1"  />
                    <label class="form-check-label" for={"soalradio"+this.props.no}>
                        {this.props.data.d}
                    </label>
            </div>
         </div>  
        );
    }
}

export default RadioButton;