import React, { useState } from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'
import styled, { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'PT Sans', sans-serif;
}


html {
	height: 100%;
	

}

body {
	font-family: Arial, Helvetica, sans-serif;
	background: linear-gradient(to bottom, #24C6DC, #514A9D);
	height: 100%;
	margin: 0;
	color: #555;

.navbar {
  background: linear-gradient(90deg, #11998e 0%, #38ef7d 100%);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
}

.navbar-logo {
  color: #fff;
  justify-self: start;
  margin-left: 20px;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
}

.fa-firstdraft {
  margin-left: 0.5rem;
  font-size: 1.6rem;
}

.nav-menu {
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 10px;
  list-style: none;
  text-align: center;
  width: 70vw;
  justify-content: end;
  margin-right: 2rem;
}

.nav-item {
  display: flex;
  align-items: center;
  height: 80px;
}

.nav-links {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
}

.nav-links:hover {
  background-color: #1888ff;
  border-radius: 4px;
  transition: all 0.2s ease-out;
}

.fa-bars {
  color: #fff;
}

.nav-links-mobile {
  display: none;
}

.menu-icon {
  display: none;
}

@media screen and (max-width: 960px) {
  .NavbarItems {
    position: relative;
  }

  .nav-menu {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: -100%;
    opacity: 1;
    transition: all 0.5s ease;
  }

  .nav-menu.active {
    background: linear-gradient(90deg, #11998e 0%, #38ef7d 100%);
    left: 0;
    opacity: 1;
    transition: all 0.5s ease;
    z-index: 1;
  }

  .nav-links {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
  }

  .nav-links:hover {
    background-color: #1888ff;
    border-radius: 0;
  }

  .navbar-logo {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(25%, 50%);
  }

  .menu-icon {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }

  .fa-times {
    color: #fff;
    font-size: 2rem;
  }

  .nav-links-mobile {
    display: block;
    text-align: center;
    padding: 1.5rem;
    margin: 2rem auto;
    border-radius: 4px;
    width: 80%;
    background: #1888ff;
    text-decoration: none;
    color: #fff;
    font-size: 1.5rem;
  }

  .nav-links-mobile:hover {
    background: #fff;
    color: #1888ff;
    transition: 250ms;
  }

  button {
    display: none;
  }
}

}
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



export default function Navbar() {
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)


    return (
			<>
				<GlobalStyle />

				<nav className="navbar">
					<Link to="/welcome" className="navbar-logo">
						AnyWhereFitness
					</Link>
					<div className="menu-icon" onClick={handleClick}>
						<i className={click ? "fas fa-times" : "fas fa-bars"} />
					</div>
					<ul className={click ? "nav-menu active" : "nav-menu"}>
						<li className="nav-item">
							<Link
								to="/welcome"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Home
							</Link>
						</li>

						<li className="nav-item">
							<Link to="/" className="nav-links" onClick={closeMobileMenu}>
								Class Timetable
							</Link>
						</li>

						<li className="nav-item">
							<Link
								to="/create-class"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Find your class
							</Link>
						</li>

						<li className="nav-item">
							<Link to="/login" className="nav-links" onClick={closeMobileMenu}>
								Login
							</Link>
						</li>
					</ul>
					<Button />
				</nav>
				<h1>WELCOME</h1>
				
			</>
		);
}