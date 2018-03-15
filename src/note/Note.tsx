import * as React from 'react';
import { connect } from 'react-redux';
import { AnyAction } from 'typescript-fsa';

import * as noteActions from './Note.ducks';
import './Note.scss';

interface Props {
  onSaveClick: () => void;
}

class Note extends React.Component<Props, {}> {
  render() {
    return (
      <div className="container">
        <textarea className="input">hello world</textarea>
        <button onClick={() => this.props.onSaveClick()}>Save!</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: (action: AnyAction) => void) => {
  return {
    onSaveClick: () => {
      dispatch(noteActions.createNote('test'));
    }
  };
};

export default connect(null, mapDispatchToProps)(Note);
