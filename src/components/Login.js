import React from 'react';
import loginSchema from '../verification/loginSchema';
import { Link } from "react-router-dom";
import useForm from '../hooks/useForm';
import styled, { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
	height: 100%;
	display:flex;
	flex-direction: column;
	justify-content: center;
	

}

body {
	font-family: Arial, Helvetica, sans-serif;
	background: linear-gradient(to bottom, #24C6DC, #514A9D);
	height: 100%;
	margin: 0;
	color: #555;
	display:flex;
	flex-direction: column;
	justify-content: center;


}
	

h2 {
	text-align: center;
	color: #ffffff;
	margin-top: 30px;
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

.container {
	padding-bottom: 2rem;
margin-top: -60px;

}

.conSubmit {
    padding-bottom: 2rem;
    display:flex;
    justify-content: center;
    
    
}

.header {
	display: flex;
	justify-content: center;
	margin-bottom: 7rem;

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


const StyledLink = styled(Link)`
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
			<div>
				<>
					<GlobalStyle />


					<StyledForm onSubmit={submit}>
					<div className="header">
						<h2>Login to Account</h2>
					</div>
						<div className="container">
							<StyledLink to="/welcome">HOME</StyledLink>
						</div>
						<label for="username">
							Username:
							<input
								data-cy="username"
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
								data-cy="password"
								type="password"
								name="password"
								id="password"
								onChange={change}
								value={formValues.password}
							/>
						</label>

						<div className="conSubmit">
							<StyledButton
								data-cy="submit" 
								disabled={error} 
								type="submit">
								Login
							</StyledButton>
						</div>

						<div>
							<NavLink to="/sign-up">Create an account?</NavLink>
						</div>
					</StyledForm>
				</>
			</div>
		);

}
