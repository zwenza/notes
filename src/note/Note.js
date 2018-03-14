import React from 'react';
import { connect } from 'react-redux';

import { createNote } from './Note.ducks';
import './Note.scss';

class Note extends React.Component {
  render() {
    return (
      <div className="container">
        <textarea className="input">hello world</textarea>
        <button onClick={() => this.props.onSaveClick()}>Save!</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSaveClick: () => {
      dispatch(createNote('test'));
    }
  };
};

export default connect(null, mapDispatchToProps)(Note);
