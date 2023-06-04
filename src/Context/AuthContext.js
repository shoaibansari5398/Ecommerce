import { createContext, useEffect, useState, useReducer } from "react";

import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toastHandler from "../Components/Notification/Toaster";

export const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGGED_IN_TRUE":
      return { ...state, isLoggedIn: action.payload };
    case "LOGGED_IN_FALSE":
      return { ...state, isLoggedIn: action.payload };
    case "SET_USERDETAILS":
      return { ...state, userDetails: action.payload };
    case "SET_TOKEN":
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const initialData = {
    isLoggedIn: false,
    userDetails: "",
    token: "",
  };

  const [authState, authDispatch] = useReducer(authReducer, initialData);

  const loginHandler = async (loginData) => {
    try {
      const res = await axios.post("/api/auth/login", loginData);
      if (res.status === 200) {
        localStorage.setItem("token", res?.data?.encodedToken);
        authDispatch({ action: "LOGGED_IN_TRUE", payload: true });
        authDispatch({
          action: "SET_USERDETAILS",
          payload: res?.data?.foundUser,
        });
        authDispatch({ action: "SET_TOKEN", payload: res?.data?.encodedToken });
        navigate(
          location?.state?.from?.pathname
            ? location?.state?.from?.pathname
            : "/"
        );
        setIsLoggedIn(true);
        toastHandler("success", "You are now logged in");
      }
    } catch (error) {
      authDispatch({ action: "LOGGED_IN_FALSE", payload: false });
      //   console.error(error);
      toastHandler("error", "Please enter correct details");
      //   alert(error.response.data.errors);
    }
  };

  const signupHandler = async (loginData) => {
    try {
      const res = await axios.post("/api/auth/signup", loginData);
      if (res.status === 200) {
        localStorage.setItem("token", res?.data?.encodedToken);
        authDispatch({ action: "LOGGED_IN_TRUE", payload: true });
        authDispatch({
          action: "SET_USERDETAILS",
          payload: res?.data?.createdUser,
        });
        authDispatch({ action: "SET_TOKEN", payload: res?.data?.encodedToken });
        alert("Sign up Successful");
        navigate("/");
        setIsLoggedIn(true);
        toastHandler("success", "Sign up Successful");
      }
    } catch (error) {
      authDispatch({ action: "LOGGED_IN_FALSE", payload: false });
      toastHandler("error", "Signup Failed");

      //   console.error(error);
      //   alert(error.response.data.errors);
    }
  };

  const logoutHandler = async () => {
    localStorage.removeItem("token");
    authDispatch({ type: "SET_LOGGEDIN_FALSE", payload: false });
    authDispatch({ type: "SET_USERDETAILS", payload: {} });
    authDispatch({ type: "SET_TOKEN", payload: "" });
    toastHandler("success", "You are now logged out!");
    // alert("You're logged out!");
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        loginHandler,
        signupHandler,
        logoutHandler,
        isLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
