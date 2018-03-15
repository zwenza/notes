import {
  AnyAction,
  Action,
  ActionCreator,
  actionCreatorFactory
} from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

const CREATE = 'notes/note/CREATE';
const UPDATE = 'note/note/UPDATE';
const LOAD = 'note/note/LOAD';

interface State {
  notes: Array<string>;
}

const initialState: State = {
  notes: []
};

const actionCreator = actionCreatorFactory();

export const loadNotes = actionCreator<{}>(LOAD);
export const createNote = actionCreator<string>(CREATE);
export const updateNote = actionCreator<string>(UPDATE);

export default reducerWithInitialState(initialState).case(
  createNote,
  (state: State, text: string): State => ({
    ...state,
    notes: [...state.notes, text]
  })
);
