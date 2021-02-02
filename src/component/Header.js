import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";
class Header extends Component {

   constructor(props) {
   super(props);
   
   }
   
   
   
   
    render() {
       console.log("Render"+ this.props.linkStatus[2])
        return (
            <div>
            <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src="https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2019/12/04/3396318833.jpg" alt="" width="30" height="24" className="d-inline-block align-top" /> Bootstrap</a>
            <ul className="nav justify-content-end">
              <li className = {`nav-item`} >
                <a className={`nav-link ${this.props.linkStatus[0]}`} aria-current="page" href="#">Home</a>
              </li>
              <li className = {`nav-item`} >
                <Link className={`nav-link ${this.props.linkStatus[1]}`} to="/createquiz">Create Quiz</Link>
              </li>
              <li className = {`nav-item`} >
               <Link className={`nav-link ${this.props.linkStatus[2]}`} to="/question">Attempt Quiz</Link>
              </li>
              <li className = {`nav-item`} >
              <Link className={`nav-link ${this.props.linkStatus[3]}`} to="/aboutus" >About Quiz</Link>
              </li>
            </ul>
          </div>
        </nav>    
            </div>
        );
    }
}

export default Header;