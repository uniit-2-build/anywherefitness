import { Route, Switch } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";

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
      </Switch>
    </main>
  );
}

export default App;
