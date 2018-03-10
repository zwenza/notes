import React from 'react';
import Note from '../note/Note';

export default class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <h2>Dashboard!</h2>
                <Note />
            </div>
        );
    }
}