import React, { useState } from 'react';

const defaultValues = {
    username: "",
    password: "",
    email: "",
}

export default function SignUp() {

    const [formValues, setFormValues] = useState(defaultValues)
    const change = evt => {
        const {name, value} = evt.target;
        setFormValues({...formValues, [name]: value})
    }
    const submit = evt => {
        evt.preventDefault();
        // api post request goes here
        setFormValues(defaultValues)
    }

    return (
        <form onSubmit={submit}>
            <h2>Create an Account:</h2>
            <label for="username">
                Username:
                <input 
                    type="text"
                    name="username"
                    id="username"
                    onChange={change}
                    value={formValues.username}
                />
            </label>
            <label for="password">
                Password:
                <input 
                    type="password"
                    name="password"
                    id="password"
                    onChange={change}
                    value={formValues.password}
                />
            </label>
            <label for="email">
                Email:
                <input 
                    type="email"
                    name="email"
                    id="email"
                    onChange={change}
                    value={formValues.email}
                />
            </label>
            <button type="submit">Create Account</button>
        </form>
    )
}
