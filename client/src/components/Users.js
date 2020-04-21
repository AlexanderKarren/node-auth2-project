import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../utils/axiosWithAuth';

const Users = () => {
    const [users, updateUsers] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        axios.get("http://localhost:4000/api/users")
        .then(response => updateUsers(response.data))
        .catch(error => setError(error.response.data.error));
    })

    return (
        <div className="Users">
            <h2>Users</h2>
            <Link to="/">Return to login page</Link>
            <div>{error}</div>
            {users.map(user => <div className="user" key={user.id}>
                <p><span>{user.username}</span></p>
                <p>{user.password}</p>
            </div>)}
        </div>
    )
}

export default Users
