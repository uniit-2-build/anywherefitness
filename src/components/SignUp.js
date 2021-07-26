import React, { useEffect, useState } from 'react';
import formSchema from '../verification';
import useForm from "../hooks/useForm";

const defaultValues = {
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
}

export default function SignUp() {

    const [formValues, error, reset, change] = useForm(formSchema, defaultValues);


    const submit = evt => {
        evt.preventDefault();
        // api post request goes here
        reset()
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
