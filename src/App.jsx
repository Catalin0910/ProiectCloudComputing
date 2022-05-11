import React from "react";
import MainPage from "./MainPage";
import Login from "./Login";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import {useEffect} from 'react'
import {gapi} from 'react-google-login'

const clientID = "283208679130-4mbpb2u39fkh4oi0l4l4raf0mpd1n30v.apps.googleusercontent.com";

function App() {

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientID,
        scope: ""
      })
    }

    gapi.load('client:auth2', start)
  })


  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact from="/ProiectCloudComputing/" render={(props) => <Login {...props} />} />
          <Route exact path="https://catalin0910.github.io/ProiectCloudComputing/main" component={MainPage}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
