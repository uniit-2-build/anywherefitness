import React, { useEffect, useState } from 'react';
import formSchema from '../verification';
import { reach } from "yup";

const defaultValues = {
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
}

export default function SignUp() {

    const [formValues, setFormValues] = useState(defaultValues);
    const [error, setError] = useState(true);

    useEffect(() => {
        formSchema.validate(formValues)
            .then(() => setError(false))
            .catch(() => setError(true))
    }, [formValues])

    const change = evt => {
        const {name, value} = evt.target;
        reach(formSchema, name)
            .validate(value)
            .then(() => setError(false))
            .catch(() => setError(true))
            .finally(() => 
                setFormValues({...formValues, [name]: value})
            )
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
            <label for="confirmPassword">
                Confirm Password:
                <input 
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    onChange={change}
                    value={formValues.confirmPassword}
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
            <button disabled={error}
            type="submit">Create Account</button>
        </form>
    )
}
