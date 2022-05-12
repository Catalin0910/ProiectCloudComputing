import React from "react";
import MainPage from "./MainPage";
import Login from "./Login";
import { Route, Switch} from "react-router-dom";


function App() {

  return (
    <div>
        <Switch>
          <Route exact from="" render={(props) => <Login {...props} />} />
          <Route path='/main' exact component={MainPage}/>
        </Switch>
    </div>
  );
}

export default App;
