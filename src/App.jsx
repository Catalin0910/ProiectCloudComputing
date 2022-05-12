import React from "react";
import MainPage from "./MainPage";
import Login from "./Login";
import { Route, Switch, Link } from "react-router-dom";


function App() {

  return (
    <div>
        <Switch>
          <Route path from='/' exact component={Login}/>
          <Route path='/main' exact component={MainPage}/>
        </Switch>
    </div>
  );
}

export default App;
