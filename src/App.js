import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";
import ClassCreation from "./components/ClassCreation";
import Navbar from './components/Navbar/Navbar'
import styled, { createGlobalStyle, css } from "styled-components";



const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'PT Sans', sans-serif;

}

`;

function App() {
  return (
		<main>
			<GlobalStyle />
			<Router>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/sign-up" exact component={SignUp} />
					<Route path="/login" exact component={Login} />
					<Route path="/create-class" exact component={ClassCreation} />
					<Route path="/welcome" exact component={Navbar} />
				</Switch>
			</Router>
		</main>
	);
}

export default App;

