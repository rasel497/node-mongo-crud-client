import React, { useState } from 'react';

const AddUser = () => {
    const [user, setUser] = useState({ name: 'deafult', email: 'default@gmail.com' });


    const handleAddUser = event => {
        event.preventDefault();
        console.log(user);

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