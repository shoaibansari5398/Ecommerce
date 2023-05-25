import { NavLink } from "react-router-dom"
import "./Login.css"
export default function Login() {
    return (
        <>
        <div class="login-container">
            <h1>Login Page</h1>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" />
            <label for="password">Password</label>
            <input type="password" name="password" id="password" />
            <button type="submit">Login</button>
            <p>Don't Have an Account?<NavLink to="/sign-up">Sign up</NavLink></p>
        </div>"
        </>
    )
}