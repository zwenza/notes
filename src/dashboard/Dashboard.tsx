import * as React from 'react';
import Note from '../note/Note';
import { SingleDatePicker } from 'react-dates';
import { Moment } from 'moment';

let moment = require('moment');
import './Dashboard.scss';

interface State {
  focused: boolean;
  selectedDate: Moment;
}

export default class Dashboard extends React.Component<{}, State> {
  state = {
    focused: false,
    selectedDate: moment()
  };

  render() {
    return (
      <div className="container">
        <div className="header">
          <SingleDatePicker
            id={'test'}
            date={this.state.selectedDate}
            onDateChange={date => this.setState({ selectedDate: date })}
            focused={this.state.focused}
            onFocusChange={(arg: { focused: boolean }) =>
              this.setState({ focused: arg.focused })
            }
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
