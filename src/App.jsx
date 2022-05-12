import React from "react";
import MainPage from "./MainPage";
import Login from "./Login";
import { Route, Switch, Link } from "react-router-dom";


function App() {

  return (
    <div>
      <ul>
        <li>
          <Link to="/main">Home Page</Link>
        </li>
      </ul>
        <Switch>
          <Route exact from="" render={(props) => <Login {...props} />} />
          <Route path="/main">
            <MainPage/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
