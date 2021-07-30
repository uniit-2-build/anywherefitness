import React from 'react';
import loginSchema from '../verification/loginSchema';
import { Link } from "react-router-dom";
import useForm from '../hooks/useForm';
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

input {
display: block;
width: 100%;
background-color: #eee;
border: 1px sold #ddd;
box-sizing: border-box;
margin: 10px 0 20px 0;
padding: 10px;
}

div {
    padding-top: 2rem;
    text-align: center;
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
	width: 11rem;
	padding: 0 20px;
	//====SPACE BETWEEN BUTTON AND EMAIL=====
	margin-top: 3rem;
	cursor: pointer;
	box-sizing: border-box;
`;


const NavLink = styled(Link)`

  color: white;
  text-decoration: none;
  &:hover {
    color: red;
    background: blue;
  }
`;





const defaultValues = {
    username: "",
    password: "",
}

export default function Login() {

    const [formValues, error, reset, change] = useForm(loginSchema, defaultValues)

    const submit = evt => {
        evt.preventDefault();
        // api post request goes here
        reset()
    }

    return (
			<>
				<GlobalStyle />
					<h2>Login to Account</h2>
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
					<StyledButton disabled={error} type="submit">
						Login
					</StyledButton>
					<div>
						<NavLink to="/sign-up">Create an account?</NavLink>
					</div>
				</StyledForm>
			</>
		);
}
