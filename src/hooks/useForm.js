import { useEffect, useState } from 'react';
import { reach } from "yup";

const useForm = (formSchema, defaultState) => {

    const [formValues, setFormValues] = useState(defaultState);
    const [error, setError] = useState(true);

    useEffect(() => {
        formSchema.validate(formValues)
            .then(() => setError(false))
            .catch(err => {
                console.log(err)
                setError(true)
            })
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
    
    const reset = () => setFormValues(defaultState);
    
    return [formValues, error, reset, change]
}
export default useForm;