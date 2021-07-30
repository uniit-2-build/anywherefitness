import React, { useState, useEffect } from 'react';
import axios from "axios";
import useForm from '../hooks/useForm';
import useSearch from '../hooks/useSearch';
import searchSchema from "../verification/searchSchema"
import ClassesList from "./ClassesList";
import styled, { createGlobalStyle, css } from 'styled-components'
import Navbar from './Navbar/Navbar'
import { Link } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
html {height: 100%;}

body {
	font-family: Arial, Helvetica, sans-serif;
	background: linear-gradient(to bottom, #24C6DC, #514A9D);
	height: 100%;
	margin-bottom: 20%;
	color: #555;
}
	
h2 {
    display:flex;
    justify-content: center;
	padding-bottom: 6rem;
	padding-top: 2rem;
	color: #eee;
}

.container {
	padding-bottom: 2rem;
    display:flex;
    justify-content: center;
}

.conReset {
	padding-bottom: 2rem;
    display:flex;
    justify-content: center;
}`;

const sharedStyles = css`
	background-color: #eee;
	border-radius: 5px;
	border: 1px sold #ddd;
	margin: 10px 0 20px 0;
	padding: 20px;
	box-sizing: border-box;
`;

const StyledFormWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	padding: 0 20px;
`;

const StyledForm = styled.form`
	width: 100%;
	max-width: 700px;
	padding: 40px;

	border-radius: 10px;
	box-sizing: border-box;
	box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

const StyledInput = styled.div`
	display: block;
	width: 100%;
	${sharedStyles};
`;

const StyledLocation = styled.label`
`;

const StyledButton = styled.button`
	display: block;
	background-color: #f7797d;
	color: #fff;
	font-size: 0.9rem;
	border: 0;
	border-radius: 5px;
	height: 40px;
	width: 10rem;
	padding: 0 20px;
	margin-top: 3rem;
	cursor: pointer;
	box-sizing: border-box;
`;

const NavLink = styled(Link)`
	display: block;
	background: linear-gradient(90deg, #11998e 0%, #38ef7d 100%);
	color: #fff;
	font-size: 0.9rem;
	border: 1px;
	border-radius: 5px;
	height: 40px;
	padding: 0 60px;
	cursor: pointer;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	padding-top: 10px;
	box-shadow: 5px 10px 8px #6f8faf;
`;

const StyledList = styled.div`
	display: block;
	justify-content: last baseline;
	width: 100%;
	box-sizing: border-box;
	${sharedStyles};
`; 

const defaultSearch = {
    class_name: "",
    class_type: "",
    startTime: "",
    startDate: "",
    location: "",
    duration: 0,
    intensity: 0,
    max: 0,
} 

export default function Home() {

    // all classes return by api
    const [initialData, setInitialData] = useState([]);
    const [formValues, error, reset, change] = useForm(searchSchema, defaultSearch);
    const filteredData = useSearch(initialData, formValues);
    
    useEffect(() => {
        const url = "https://anywherefitnessunit4.herokuapp.com/api/classes";
        axios
            .get(url)
            .then(res => {
                console.log(res.data)
                setInitialData(res.data)
            })
            .catch(err => console.log(err))
        
    }, [])
    // for testing 
    useEffect(() => {
        console.log(initialData)
    }, [initialData])

    return (
			<div>
				<>
					<GlobalStyle />
					<h2>Class Timetable</h2>

					<StyledFormWrapper>
						<StyledForm onSubmit={(e) => e.preventDefault()}>
							<div className="container">
								<NavLink to="/welcome">HOME</NavLink>
							</div>
							<StyledInput>
								<label htmlFor="class_name">
									Name:
									<input
										data-cy="class-name"
										type="text"
										name="class_name"
										id="class_name"
										value={formValues.class_name}
										onChange={change}
									/>
								</label>
							</StyledInput>

							<StyledInput>
								<label htmlFor="class_type">
									Type:
									<input
										data-cy="class-type"
										type="text"
										name="class_type"
										id="class_type"
										value={formValues.class_type}
										onChange={change}
									/>
								</label>
							</StyledInput>

							<StyledInput>
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
							</StyledInput>

							<StyledInput>
								<label htmlFor="startDate">
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
							</StyledInput>

							<StyledInput>
								<StyledLocation>
									<label htmlFor="location">
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
								</StyledLocation>
							</StyledInput>

							<StyledInput>
								<label htmlFor="intensity">
									Intensity (1 to 10):
									<input
										data-cy="class-intensity"
										type="number"
										name="intensity"
										id="intensity"
										min={1}
										max={10}
										value={formValues.intensity}
										onChange={change}
									/>
								</label>
							</StyledInput>

							<StyledInput>
								<label htmlFor="max">
									Max participants:
									<input
										data-cy="class-max"
										type="number"
										name="max"
										id="max"
										value={formValues.max}
										onChange={change}
									/>
								</label>
							</StyledInput>
							<StyledList>
								<ClassesList classes={filteredData} />
							</StyledList>
							<div className="conReset">
								<StyledButton data-cy="reset" onClick={reset} type="reset">
									Reset
								</StyledButton>
							</div>
						</StyledForm>
					</StyledFormWrapper>
				</>
			</div>
		);

	}
