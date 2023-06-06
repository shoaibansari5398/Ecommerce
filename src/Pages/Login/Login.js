import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import "./Login.css";
import { AuthContext } from "../../Context/AuthContext";
// import { useNavigate } from "react-router-dom";
export default function Login() {
  // const navigate = useNavigate();

  const { loginHandler } = useContext(AuthContext);
  const [userData, setUserData] = useState({ email: "", password: "" });

  const testUser = {
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
  };

  const userLoginHandler = (e) => {
    // e.preventDefault();
    if (!userData.email.trim() || !userData.password.trim()) {
      alert("Please enter valid Input");
    } else {
      console.log("logging in");
      loginHandler(userData);
    }
  };

  const testUserLogin = (e) => {
    e.preventDefault();
    setUserData(testUser);
    loginHandler(testUser);
  };

  return (
    <>
      <div className="login-container">
        <h1>Login Page</h1>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          placeholder="a.b@c.com"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />
        <button onClick={userLoginHandler}>Login</button>
        <button onClick={testUserLogin}>Test User Login</button>
        <p>
          Don't Have an Account?<NavLink to="/sign-up">Sign up</NavLink>
        </p>
      </div>
      "
    </>
  );
}
