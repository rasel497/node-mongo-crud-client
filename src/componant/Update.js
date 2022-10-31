import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const sotredUser = useLoaderData();
    const [user, setUser] = useState(sotredUser);


    const handleUpdateUser = event => {
        event.preventDefault();
        console.log(user);
        // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_json_data

    }

    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        // console.log(value, field);

        const newUser = { ...user }
        newUser[field] = value;
        setUser(newUser)
    }


    return (
        <div>
            <h1>Please Update: {sotredUser.name}</h1>
            <form onSubmit={handleUpdateUser}>
                <input onChange={handleInputChange} defaultValue={sotredUser.name} type="text" name='name' placeholder='your name' required /> <br />
                <input onChange={handleInputChange} defaultValue={sotredUser.address} type="text" name='address' placeholder='your address' required /> <br />
                <input onChange={handleInputChange} defaultValue={sotredUser.email} type="email" name='email' placeholder='your email' required /><br />
                <button>Update User</button>
            </form>
        </div>
    );
};

export default Update;