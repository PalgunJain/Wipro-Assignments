import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateNote, deleteNote } from '../redux/actions';

const NoteItem = ({ note }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedContent, setEditedContent] = useState(note.content);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(updateNote(note.id, { title: editedTitle, content: editedContent }));
    setIsEditing(false);
  };

  return (
    <div className='note-item'>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => dispatch(deleteNote(note.id))}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default NoteItem;