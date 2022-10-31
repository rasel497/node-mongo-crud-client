import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Home = () => {
    const users = useLoaderData();

    const handleDelete = user => {
        const agree = window.confirm(`Are you sure! you want to delete it? ${user.name}`)
        // console.log(agree);
        if (agree) {
            console.log('Deleting user with id: ', user._id);
        }
    }
    return (
        <div>
            <h2>This User Home: {users.length}</h2>
            <div className="show">
                {
                    users.map(user => <h4 key={user._id}>
                        {user.name} <small>{user.email}</small> <button onClick={() => handleDelete(user)}>X</button>
                    </h4>)
                }
            </div>
        </div>
    );
};

export default Home;