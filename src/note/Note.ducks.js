const CREATE = 'notes/note/CREATE';
const UPDATE = 'note/note/UPDATE';
const LOAD = 'note/note/LOAD';

const initialState = {
  notes: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CREATE:
      return Object.assign({}, state, { notes: [...state.notes, action.text] });
    default:
      return state;
  }
}

export function loadNotes() {
  return { type: LOAD };
}

export function createNote(text) {
  return { type: CREATE, text };
}

export function updateNote(text) {
  return { type: UPDATE, text };
}
