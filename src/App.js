import { Route, Switch } from "react-router-dom";
import SignUp from "./components/SignUp";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" exact>
          
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/login">

        </Route>
      </Switch>
    </main>
  );
}

export default App;
