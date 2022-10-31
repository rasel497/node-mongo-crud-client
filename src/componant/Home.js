import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Home = () => {
    const users = useLoaderData();
    return (
        <div>
            <h2>This User Home: {users.length}</h2>
            <div className="show">
                {
                    users.map(user => <h4 key={user._id}>
                        {user.name} <small>{user.email}</small>
                    </h4>)
                }
            </div>
        </div>
    );
};

export default Home;