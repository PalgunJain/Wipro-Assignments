import React, { useState } from 'react';
import axios from 'axios';

const UserForm = ({ onUserAdded }) => {
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name) return;

        const response = await axios.post('http://localhost:5000/users', { name });
        onUserAdded(response.data);
        setName('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter user name"
            />
            <button type="submit">Add User</button>
        </form>
    );
};

export default UserForm;
