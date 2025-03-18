import { ADD_NOTE, UPDATE_NOTE, DELETE_NOTE } from './actions';

const initialState = {
  notes: JSON.parse(localStorage.getItem('notes')) || [],
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      const addedNotes = [...state.notes, { ...action.payload, id: Date.now() }];
      localStorage.setItem('notes', JSON.stringify(addedNotes));
      return { ...state, notes: addedNotes };
    case UPDATE_NOTE:
      const updatedNotes = state.notes.map((note) =>
        note.id === action.payload.id ? { ...note, ...action.payload.updatedNote } : note
      );
      localStorage.setItem('notes', JSON.stringify(updatedNotes));
      return { ...state, notes: updatedNotes };
    case DELETE_NOTE:
      const filteredNotes = state.notes.filter((note) => note.id !== action.payload);
      localStorage.setItem('notes', JSON.stringify(filteredNotes));
      return { ...state, notes: filteredNotes };
    default:
      return state;
  }
};

export default notesReducer;