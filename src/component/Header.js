import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
            <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src="https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2019/12/04/3396318833.jpg" alt="" width="30" height="24" className="d-inline-block align-top" /> Bootstrap</a>
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="http://localhost:3000">Create Quiz</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Attempt Quiz</a>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="#">About Quiz</a>
              </li>
            </ul>
          </div>
        </nav>    
            </div>
        );
    }
}

export default Header;