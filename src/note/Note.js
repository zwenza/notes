import React from 'react';
import './Note.scss';

export default class Note extends React.Component {
    render() {
        return (
            <div className="container">
                <textarea className="input">
                    hello world
                </textarea>
            </div>
        )
    }
}