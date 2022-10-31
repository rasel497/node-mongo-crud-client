import React, { useState } from 'react';

const AddUser = () => {
    const [user, setUser] = useState({});

    const handleAddUser = event => {
        event.preventDefault();
        console.log(user);
        // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_json_data
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('User added successfully');
                    event.target.reset();
                }
            })
    }

    const handleInputBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        // console.log(value, field);

        const newUser = { ...user }
        newUser[field] = value;
        setUser(newUser)
    }


    return (
        <div>
            <h2>Please add a new user</h2>
            <form onSubmit={handleAddUser}>
                <input onBlur={handleInputBlur} type="text" name='name' placeholder='your name' required /> <br />
                <input onBlur={handleInputBlur} type="text" name='address' placeholder='your address' required /> <br />
                <input onBlur={handleInputBlur} type="email" name='email' placeholder='your email' required /><br />
                <button>Add New User</button>
            </form>
        </div>
    );
};

export default AddUser;