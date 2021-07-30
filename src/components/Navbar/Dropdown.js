import React, { useState } from 'react'
import { MenuItems } from './MenuItems'
import { Link } from 'react-router-dom'
import styled, { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
    width: 200px;
    position: absolute;
    top: 80px;
    list-style: none;
    text-alight: start;

}

li {
    background: #1888ff;
    cursor: pointer;

    &:hover {
        background: #5cabff;

    }
}

ul {
    display: none;
}

div {
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;]
    color: #fff;
    padding: 16px;

}



`;



export default function Dropdown(){
    const [click, setClick] = useState (false)

    const handleClick = () => setClick(!click)


    
       return (
           <>
           <GlobalStyle />
           <ul onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
            {MenuItems.map((item, index) => {
                return (
									<li key={index}>
										<div>
											<Link
												className={item.cName}
												to={item.path}
												onClick={() => setClick(false)}
											>
												{item.title}
											</Link>
										</div>
									</li>
								);
            })}
        </ul>
       </>
       )
    
}