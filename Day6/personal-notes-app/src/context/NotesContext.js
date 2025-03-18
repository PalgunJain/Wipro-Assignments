import React, { createContext, useState, useEffect } from 'react';

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState(() => {
    const localData = localStorage.getItem('notes');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    setNotes([...notes, { ...note, id: Date.now() }]);
  };

  const updateNote = (id, updatedNote) => {
    setNotes(notes.map((note) => (note.id === id ? { ...note, ...updatedNote } : note)));
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, updateNote, deleteNote }}>
      {children}
    </NotesContext.Provider>
  );
};