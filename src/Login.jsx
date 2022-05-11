import React from "react";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router-dom";

const Login = () => {
  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  };

  const history = useHistory();
  const handleLoginData = (event) => {
    history.push("/ProiectCloudComputing/main");
  };

  return (
    <div>
      <GoogleLogin
        clientId="283208679130-4mbpb2u39fkh4oi0l4l4raf0mpd1n30v.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={handleLoginData}
        onFailure={responseGoogle}
        href="/ProiectCloudComputing/main"
      />
    </div>
  );
};

export default Login;
