import React from 'react';
import useForm from "../hooks/useForm";
import { classSchema } from "../verification"

const defaultForm = {
    name: "",
    type: "",
    start: "",
    location: "",
    duration: 0 || null,
    intensity: 0 || null,
    max: 0 || null,
} 

export default function ClassCreation() {

    const [formValues, error, reset, change] = useForm(classSchema, defaultForm)
    const submit = evt => {
        evt.preventDefault();
        // place post request here

        reset()
    }

    return (
        <form onSubmit={submit}>
            <label for="name">
                Name:
                <input 
                    data-cy="class-name"
                    type="text"
                    name="name"
                    id="name"
                    value={formValues.name}
                    onChange={change}
                />
            </label>
            <label for="type">
                Type:
                <input 
                    data-cy="class-type"
                    type="text"
                    name="type"
                    id="type"
                    value={formValues.type}
                    onChange={change}
                />
            </label>
            <label for="start">
                Start Time:
                <input 
                    data-cy="class-start"
                    type="datetime"
                    name="start"
                    id="start"
                    value={formValues.start}
                    onChange={change}
                />
            </label>
            <label for="location">
                Location:
                <input 
                    data-cy="class-location"
                    type="text"
                    name="location"
                    id="location"
                    value={formValues.location}
                    onChange={change}
                />
            </label>
            <label for="duration">
                Duration (minutes):
                <input 
                    step={5}
                    data-cy="class-duration"
                    type="number"
                    name="duration"
                    id="duration"
                    value={formValues.duration}
                    onChange={change}
                />
            </label>
            <label for="intensity">
                Intensity (1 to 10):
                <input 
                    step={1}
                    data-cy="class-intensity"
                    type="number"
                    name="intensity"
                    id="intensity"
                    value={formValues.intensity}
                    onChange={change}
                />
            </label>
            <label for="max">
                Max participants:
                <input 
                    data-cy="class-max"
                    step={1}
                    type="text"
                    name="max"
                    id="max"
                    value={formValues.max}
                    onChange={change}
                />
            </label>
            <button 
                data-cy="class-submit"
                disabled={error}
                type="submit"
            >Submit</button>
        </form>
    )
}
