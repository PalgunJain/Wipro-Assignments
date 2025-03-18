import React, { useState, useEffect } from 'react';
import FriendService from '../services/FriendService';
import { Link } from 'react-router-dom';
import './FriendList.css';

function FriendList() {
  const [friends, setFriends] = useState([]);
  const [newFriendName, setNewFriendName] = useState('');
  const [editingFriendId, setEditingFriendId] = useState(null);
  const [editedFriendName, setEditedFriendName] = useState('');

  useEffect(() => {
    setFriends(FriendService.getFriends());
  }, []);

  const handleAddFriend = () => {
    if (newFriendName.trim()) {
      FriendService.addFriend(newFriendName);
      setFriends(FriendService.getFriends());
      setNewFriendName('');
    }
  };

  const handleRemoveFriend = (id) => {
    FriendService.removeFriend(id);
    setFriends(FriendService.getFriends());
  };

  const handleEditFriend = (friend) => {
    setEditingFriendId(friend.id);
    setEditedFriendName(friend.name);
  };

  const handleSaveFriend = (id) => {
    FriendService.updateFriend(id, editedFriendName);
    setFriends(FriendService.getFriends());
    setEditingFriendId(null);
    setEditedFriendName('');
  };

  return (
    <div className="friend-list">
      <nav className="friend-list-nav">
        <Link to="/">Dashboard</Link>
        <Link to="/expenses">Expenses</Link>
        <Link to="/summary">Summary</Link>
      </nav>
      <div className="friend-list-content">
        <h2>Friends</h2>
        <div>
          <input
            type="text"
            value={newFriendName}
            onChange={(e) => setNewFriendName(e.target.value)}
            placeholder="Friend Name"
          />
          <button onClick={handleAddFriend}>Add Friend</button>
        </div>
        <ul>
          {friends.map((friend) => (
            <li key={friend.id}>
              {editingFriendId === friend.id ? (
                <>
                  <input
                    type="text"
                    value={editedFriendName}
                    onChange={(e) => setEditedFriendName(e.target.value)}
                  />
                  <button onClick={() => handleSaveFriend(friend.id)}>Save</button>
                </>
              ) : (
                <>
                  {friend.name}
                  <button onClick={() => handleEditFriend(friend)}>Edit</button>
                  <button onClick={() => handleRemoveFriend(friend.id)}>Remove</button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FriendList;