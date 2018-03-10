import React, { Component } from 'react';
import Dashboard from './dashboard/Dashboard';
import './App.scss';

import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
class App extends Component {
  render() {
    return (
      <div className="container">
        <Dashboard />
      </div>
    );
  }
}

export default App;
