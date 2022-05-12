import React from "react";
import MainPage from "./MainPage";
import Login from "./Login";
import { Route, Switch, HashRouter} from "react-router-dom";


function App() {

  return (
    <div>
      <HashRouter>
       <Switch>
         <Route path='/' exact component={Login}/>
         <Route path='/main' exact component={MainPage}/>
       </Switch>
     </HashRouter>
    </div>
  );
}

export default App;
