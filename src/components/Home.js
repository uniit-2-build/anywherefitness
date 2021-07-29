import React, { useState, useEffect } from 'react';
import axios from "axios";
import useForm from '../hooks/useForm';
import useSearch from '../hooks/useSearch';
import searchSchema from "../verification/searchSchema"
import ClassesList from "./ClassesList";
import styled, { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
`

const sharedStyles = css`
`

const StyledFormWrapper = styled.div`
`

const StyledForm = styled.form`
`

const StyledInput = styled.input`
`

const StyledTextArea = styled.textarea`
`

const StyledButton = styled.button`
`

const StyledFieldset = styled.fieldset`
`

const StyledError = styled.div`
`


const defaultSearch = {
    name: "",
    type: "",
    startTime: "",
    startDate: "",
    location: "",
    duration: null,
    intensity: null,
    max: null,
} 

export default function Home() {

    // all classes return by api
    const [initialData, setInitialData] = useState([]);
    const [formValues, error, reset, change] = useForm(searchSchema, defaultSearch);
    
    const filteredData = useSearch(initialData, formValues)
    
    useEffect(() => {
        const url = "https://anywherefitnessunit4.herokuapp.com/api/users"
        const getData = () => {
            axios
                .get(url)
                .then(res => setInitialData(res.data))
                .catch(err => console.log(err))
        }
        getData();
    }, [])

    return (


        <div>
        <>
        <GlobalStyle />
            <StyledFormWrapper>
            <StyledForm>
        
        
            <h2>Class Timetable</h2>
            <form onSubmit={e => e.preventDefault()}>
                <label htmlFor="name">
                    Name:
                    <StyledInput 
                        data-cy="class-name"
                        type="text"
                        name="name"
                        id="name"
                        value={formValues.name}
                        onChange={change}
                    />
                </label>
                <label htmlFor="type">
                    Type:
                    <StyledInput 
                        data-cy="class-type"
                        type="text"
                        name="type"
                        id="type"
                        value={formValues.type}
                        onChange={change}
                    />
                </label>
                <StyledFieldset>
                <label htmlFor="startTime">
                    Start Time:
                    <input 
                        data-cy="class-time"
                        type="time"
                        name="startTime"
                        id="startTime"
                        value={formValues.startTime}
                        onChange={change}
                    />
                </label>
                </StyledFieldset>

                <label for="startDate">
                    Start Date:
                    <input 
                        data-cy="class-date"
                        type="date"
                        name="startDate"
                        id="startDate"
                        value={formValues.startDate}
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
                        type="text"
                        name="max"
                        id="max"
                        value={formValues.max}
                        onChange={change}
                    />
                </label>
                <StyledButton 
                    data-cy="reset"
                    onClick={reset} 
                    type="reset"
                >Reset</StyledButton>
            </form>
            <ClassesList classes={filteredData} />
            </StyledForm>
            </StyledFormWrapper>
            </>
        </div>
    )
}
