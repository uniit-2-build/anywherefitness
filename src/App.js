import { Route, Switch } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";
import ClassCreation from "./components/ClassCreation";
import Navbar from './components/Navbar/Navbar'




function App() {
  return (
    <main>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/create-class">
          <ClassCreation />
        </Route>
        <Route path="/welcome">
          <Navbar />
        </Route>
        

      </Switch>
    </main>
  );
}

export default App;
