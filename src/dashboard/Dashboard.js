import React from 'react';
import Note from '../note/Note';
import './Dashboard.scss';

export default class Dashboard extends React.Component {
    render() {
        return (
            <div className="container">
                <h2>Calendar TODO</h2>
                <Note />
            </div>
        );
    }
}