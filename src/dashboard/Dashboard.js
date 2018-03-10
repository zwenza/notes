import React from 'react';
import Note from '../note/Note';
import './Dashboard.scss';

export default class Dashboard extends React.Component {
    render() {
        return (
            <div className="test">
                <h2>Dashboard!</h2>
                <p>Test</p>
                <Note />
            </div>
        );
    }
}