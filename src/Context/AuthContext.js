import { createContext, useEffect, useReducer } from "react";

import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toastHandler from "../Components/Notification/Toaster";

export const AuthContext = createContext();

const authReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "LOGGED_IN_TRUE":
      return {
        ...state,
        isLoggedIn: action.payload,
      };
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

  const initialData = {
    isLoggedIn: false,
    userDetails: {},
    token: "",
  };

  const [authState, authDispatch] = useReducer(authReducer, initialData);
  useEffect(() => console.log(authState), [authState]);
  const loginHandler = async (loginData) => {
    try {
      const res = await axios.post("/api/auth/login", loginData);
      if (res?.status === 200) {
        localStorage.setItem("token", res?.data?.encodedToken);
        authDispatch({ type: "LOGGED_IN_TRUE", payload: true });
        authDispatch({
          type: "SET_USERDETAILS",
          payload: res?.data?.foundUser,
        });
        authDispatch({ type: "SET_TOKEN", payload: res?.data?.encodedToken });
        navigate(
          location?.state?.from?.pathname
            ? location?.state?.from?.pathname
            : "/"
        );
        toastHandler("success", "You are now logged in");
        console.log(res);
      }
    } catch (error) {
      authDispatch({ type: "LOGGED_IN_TRUE", payload: false });
      toastHandler("error", "Please enter correct details");
    }
  };

  const signupHandler = async (loginData) => {
    try {
      const res = await axios.post("/api/auth/signup", loginData);
      if (res.status === 200) {
        localStorage.setItem("token", res?.data?.encodedToken);
        authDispatch({ type: "LOGGED_IN_TRUE", payload: true });
        authDispatch({
          action: "SET_USERDETAILS",
          payload: res?.data?.createdUser,
        });
        authDispatch({ type: "SET_TOKEN", payload: res?.data?.encodedToken });
        alert("Sign up Successful");
        navigate("/");
        toastHandler("success", "Sign up Successful");
      }
    } catch (error) {
      authDispatch({ type: "LOGGED_IN_TRUE", payload: false });
      toastHandler("error", "Signup Failed");
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    authDispatch({ type: "LOGGED_IN_TRUE", payload: false });
    authDispatch({ type: "SET_USERDETAILS", payload: {} });
    authDispatch({ type: "SET_TOKEN", payload: "" });
    toastHandler("success", "You are now logged out!");
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        loginHandler,
        signupHandler,
        logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
