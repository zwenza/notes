import React from 'react';
import Note from '../note/Note';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';
import './Dashboard.scss';

export default class Dashboard extends React.Component {
  state = {
    focused: false,
    selectedDate: moment()
  };

  render() {
    return (
      <div className="container">
        <div className="header">
          <SingleDatePicker
            date={this.state.selectedDate}
            onDateChange={date => this.setState({ selectedDate: date })}
            focused={this.state.focused}
            onFocusChange={({ focused }) => this.setState({ focused })}
            showDefaultInputIcon
          />
        </div>
        <div className="content">
          <div>
            <h2>Metadata</h2>
            <br />
            <p>Created 10.03.2018</p>
          </div>
          <Note />
        </div>
      </div>
    );
  }
}
