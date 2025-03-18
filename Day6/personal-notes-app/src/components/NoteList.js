import React from 'react';
import { useSelector } from 'react-redux';
import NoteItem from './NoteItem';

const NoteList = () => {
  const notes = useSelector((state) => state.notes);

  return (
    <div>
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NoteList;