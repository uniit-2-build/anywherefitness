import { Route, Switch } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";
import ClassCreation from "./components/ClassCreation";
import "./styling/reset.css"

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
      </Switch>
    </main>
  );
}

export default App;
