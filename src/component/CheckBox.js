import React, { Component } from 'react';

class CheckBox extends Component {
  constructor(props) {
  super(props);
  }
    render() {
        return (
            <div>
                <label>{this.props.no}.  {this.props.data.soal}</label><p></p>
                {this.props.data.option.map((options,i) => {

                    return <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label class="form-check-label" for="defaultCheck1">
                           {options}
                        </label>
                    </div>


                })}
               
               

            </div>
        );
    }
}

export default CheckBox;