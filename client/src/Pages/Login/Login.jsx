import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";

const fetchUserbyUserName = (name) => {
  return fetch(`users/login/${name}`).then((res) => res.json());
};

const Login = () => {
    const navigate = useNavigate();

    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const [showMessageInvalid, setshowMessageInvalid] = useState(false);
    const [showMessageExisting, setShowMessageExisting] = useState(false);
    const [loginName, setLoginName] = useState("");
    const [password, setPassword] = useState("");
    const [signupName, setSignupName] = useState("");
    const [signupPassword, setSignupPassword] = useState("");
    
    const handleSubmitLogin = async (e) => {
      e.preventDefault();
      setshowMessageInvalid(false);
    
      const response = await fetchUserbyUserName(loginName);
      console.log(response);  

      if (response !== null) {
        const user = response;
        navigate(`/${user.user_id}/`);
      } else {
        setshowMessageInvalid(true);
      }
      setLoginName("");
    };
    
    const handleSubmitSignup = async (e) => {
        
      e.preventDefault();
      //setShowMessageExisting(false);

      createNewUser(signupName, signupPassword);
      setSignupName("");

      /*const response = await fetchUserbyUserName(signupName);

      if (response.length === 0) {
        createNewUser(signupName, signupPassword);
      } else {
        setShowMessageExisting(true);
      }
      setSignupName("");*/
    };
    
    const createNewUser = async (user_name, password) => {
      const body = { user_name, password };
    
      fetch("/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((res) => res.json())
        .then((newuser) => navigate(`/${newuser.user_id}/`));
    };
    
    return (
      <>
        <div className="login-container">
          <h1 onClick={() => setShowLogin(!showLogin)}>LOGIN</h1>
          {showLogin && (
            <form onSubmit={handleSubmitLogin}>
              <input
                type="text"
                id="user_name"
                name="user_name"
                //pattern="[a-z]{2,10}\d{3}"
                placeholder="Username"
                value={loginName}
                onChange={(e) => setLoginName(e.target.value)}
              />
              <input
                type="password"
                id="password"
                name="password"
                //pattern="[a-z]{2,10}\d{3}"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {(showMessageInvalid && showLogin) && (
                <>
                  <p className="login-container-message-optional">Invalid username</p>
                  <p className="login-container-message-optional">Please try again or sign-up</p>
                </>
              )}
              <button type="submit">Log me in</button>
            </form>
          )}
          <h1 onClick={() => setShowSignup(!showSignup)}>SIGNUP</h1>
          {showSignup && (
            <form onSubmit={handleSubmitSignup}>
              <input
                type="text"
                id="user_name"
                name="user_name"
                //pattern="[a-z]{2,10}\d{3}"
                placeholder="Username eg. anita366..."
                value={signupName}
                onChange={(e) => setSignupName(e.target.value)}
              />
              <input
                type="password"
                id="password"
                name="password"
                //pattern="[a-z]{2,10}\d{3}"
                placeholder="Password"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
              />
              {(showMessageExisting && showSignup) && (
                <p className="login-container-message-optional">This username is already in use, please try another</p>
              )}
              <button type="submit">Sign me up</button>
            </form>
          )}
        </div>
      </>
    );
};

export default Login;

