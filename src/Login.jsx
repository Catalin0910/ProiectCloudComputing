import React from "react";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router-dom";


const clientID = "283208679130-4mbpb2u39fkh4oi0l4l4raf0mpd1n30v.apps.googleusercontent.com";

const Login = () => {
  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  };

  const history = useHistory();
  const handleLoginData = (res) => {
    console.log("LOGIN SUCCES! Current user: ", res.profileObj)  
   };

  return (
    <div>
      <GoogleLogin
        clientId={clientID}
        buttonText="Login"
        onSuccess={handleLoginData}
        onFailure={responseGoogle}
        isSignedIn={true}
        href="/main"
      />

    </div>
  );
};

export default Login;
