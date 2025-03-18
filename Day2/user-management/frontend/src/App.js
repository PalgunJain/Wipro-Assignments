import React, { useState } from 'react';
import UserList from './UserList';  // Ensure these files exist
import UserForm from './UserForm';

const App = () => {
    const [users, setUsers] = useState([]);

    const handleUserAdded = (newUser) => {
        setUsers([...users, newUser]);
    };

    return (
        <div>
            <h1>User Management System</h1>
            <UserForm onUserAdded={handleUserAdded} />
            <UserList />
        </div>
    );
};

export default App;
