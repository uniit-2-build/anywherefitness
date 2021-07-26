import React, { useEffect, useState } from 'react';
import formSchema from '../verification';
import { reach } from "yup";

const defaultValues = {
    username: "",
    password: "",
}

export default function Login() {

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
        <div>
            
        </div>
    )
}
