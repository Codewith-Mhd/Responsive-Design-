import React, { Component } from 'react';
import './style.css';
import Navbar from '././components/Navbar/Navbar';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

export default class app extends Component {
  state = {
    closed: false,
    clicked: false,
  };

  clickedHandler = () => {
    this.setState({
      clicked: !this.state.clicked,
      closed: !this.state.closed,
    });
  };
  render() {
    return (
      <div className="app">
        <Navbar clicked={this.clickedHandler} close={this.state.closed} />
        <BrowserRouter>
          <Routes>
            <Route path="/home" render={() => <h2>Welcome to home!</h2>} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
