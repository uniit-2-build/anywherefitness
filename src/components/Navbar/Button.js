import React from 'react'
import styled, { createGlobalStyle, css } from "styled-components";

import { Link } from 'react-router-dom'


const StyledButton = styled.button`
padding: 8px 20px;
border-radius: 4px;
outline: none;
border: none;
font-size: 18px;
color: #ffffff;
cursor: pointer;
background-color: #1888ff;

&:hover {
    padding: 6px 18px;
    transition: all 0.3s ease-out;
    background-color: transparent;
    color: #ffffff;
    border-radius: 4px;
    border: 2px solid #1888ff;
    
}


`;



export function Button() {
    return (
        <Link to='/sign-up'>
        <StyledButton className='btn'>Sign Up</StyledButton>
        </Link>
    )
}