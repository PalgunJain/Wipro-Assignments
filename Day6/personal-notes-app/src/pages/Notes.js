import React from 'react';
import AddNote from '../components/AddNote';
import NoteList from '../components/NoteList';

const Notes = () => {
  return (
    <div>
      <h1>Your Notes</h1>
      <AddNote />
      <NoteList />
    </div>
  );
};

export default Notes;