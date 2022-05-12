import React from "react";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router-dom";


const clientID = "283208679130-4mbpb2u39fkh4oi0l4l4raf0mpd1n30v.apps.googleusercontent.com";

const Login = () => {

  const history = useHistory();

  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
    
  };

  
  const handleLoginData = (event) => {
    history.push("/main");
  };

  return (
    <div>
    
      <button onClick={()=>history.push('/main')}>Apasa aici fara a te loga</button>
      
      <GoogleLogin
        clientId={clientID}
        buttonText="Login"
        onSuccess={handleLoginData}
        onFailure={responseGoogle}
        href="/main"
      />

    </div>
  );
};

export default Login;
