import React from 'react';
import Note from '../note/Note';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';
import './Dashboard.scss';

export default class Dashboard extends React.Component {
    state = {
        datePickerActive: false,
        selectedDate: undefined
    }

    render() {
        return (
            <div className="container">
                <div className="header">
                    <SingleDatePicker
                        date={moment()}
                        onDateChange={date => {
                            this.setState(state => {
                                console.log('date changed');

                                state.datePickerActive = false;
                                state.selectedDate = date;
                            })
                        }}
                        focused={this.state.datePickerActive}
                        onFocusChange={({ focused }) => { console.log('focus'); this.setState(state => state.datePickerActive = !state.datePickerActive) }}
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