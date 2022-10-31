import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';


const Home = () => {
    const users = useLoaderData();
    const [displayUsers, setDisplayUsers] = useState(users);

    const handleDelete = user => {
        const agree = window.confirm(`Are you sure! you want to delete it? ${user.name}`)
        // console.log(agree);
        if (agree) {
            // console.log('Deleting user with id: ', user._id);
            fetch(`http://localhost:5000/users/${user._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if (data.deletedCount > 0) {
                        alert('User deleted successfully.');
                        const remainingUSers = displayUsers
                            .filter(usr => usr._id !== user._id);
                        setDisplayUsers(remainingUSers);
                    }
                });
        }
    }

    return (
        <div>
            <h2>This User Home: {displayUsers.length}</h2>
            <div className="show">
                {
                    displayUsers.map(user => <h4 key={user._id}>
                        {user.name} <small>{user.email}</small> <button onClick={() => handleDelete(user)}>X</button>
                    </h4>)
                }
            </div>
        </div>
    );
};

export default Home;