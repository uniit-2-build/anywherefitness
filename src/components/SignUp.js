import React from 'react';
import { Link } from "react-router-dom";
import signUpSchema from '../verification/signUpSchema';
import useForm from "../hooks/useForm";
import styled, { createGlobalStyle, css } from "styled-components";


const GlobalStyle = createGlobalStyle`
html {
	height: 100%;
	

}

body {
	font-family: Arial, Helvetica, sans-serif;
	background: linear-gradient(to bottom, #24C6DC, #514A9D);
	height: 100%;
	margin: 0;
	color: #555;

}
	

h2 {
	text-align: center;
	color: #ffffff;
}
`;

const sharedStyles = css`
`;


const StyledForm = styled.form`
	width: 100%;
	max-width: 700px;
	padding: 100px;

	border-radius: 10px;
	box-sizing: border-box;
	box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;


const StyledInput = styled.label`
`;

const StyledButton = styled.button`
`;

const StyledLink = styled.link`
`;

const defaultValues = {
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
}


export default function SignUp() {

    const [formValues, error, reset, change] = useForm(signUpSchema, defaultValues);


    const submit = evt => {
        evt.preventDefault();
        // api post request goes here
        reset()
    }



    return (
			<>
				<GlobalStyle />

					<h2>Create an Account:</h2>
				<StyledForm onSubmit={submit}>
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
					<button data-cy="submit" disabled={error} type="submit">
						Create Account
					</button>

					<Link to="/login">Already have an account?</Link>
				</StyledForm>
			</>
		);
}
