import React from 'react';
import AddNote from './components/AddNote';
import NoteList from './components/NoteList';
import './styles.css'; // Import the CSS file

function App() {
  return (
    <div>
      <h1>Personal Notes</h1>
      <AddNote />
      <NoteList />
    </div>
  );
}

export default App;