import React from 'react';
import useForm from "../hooks/useForm";
import classSchema from "../verification/classSchema"
import styled, { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
	height: 100%;
	

}

body {
	font-family: Arial, Helvetica, sans-serif;
	background: linear-gradient(to bottom, #24C6DC, #514A9D);
	height: 100%;
	margin-bottom: 20%;
	color: white;

}
	

h2 {
	text-align: center;
	color: #ffffff;
}

input {
display: block;
width: 100%;
background-color: #eee;
border: 1px sold #ddd;
border-radius: 20px;
box-sizing: border-box;
margin: 10px 0 20px 0;
padding: 15px;
opacity: 0.8;

}

div {
    padding-top: 0rem;
    display: flex;
    justify-content: center;
}

`;

const sharedStyles = css`
	background-color: #eee;
	border-radius: 5px;
	border: 1px sold #ddd;
	margin: 10px 0 20px 0;
	padding: 20px;
	box-sizing: border-box;
`;

const StyledForm = styled.form`
	width: 100%;
	max-width: 700px;
	padding: 100px;
	border-radius: 10px;
	box-sizing: border-box;
	box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

const StyledButton = styled.button`
	display: block;
	background-color: #ade8f4;
	color: #0077b6;
	font-size: 0.9rem;
	border: 0;
	border-radius: 5px;
	height: 40px;
	width: 20rem;
    
	padding: 0 20px;
	//====SPACE BETWEEN BUTTON AND EMAIL=====
	margin-top: 3rem;
	cursor: pointer;
	box-sizing: border-box;
`;


const defaultForm = {
    name: "",
    type: "",
    startTime: "",
    startDate: "",
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
        <> 
        <GlobalStyle />
        <h2>Find your class</h2>
        <StyledForm onSubmit={submit}>
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
            <label for="startTime">
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
            <div>
            <StyledButton 
                data-cy="class-submit"
                disabled={error}
                type="submit"
            >Submit</StyledButton>
        </div>
        </StyledForm>
        </>

    )
}
