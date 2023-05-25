import "./Signup.css"


export default function Signup(){
    return(
            <>
        <div class="signup-container">
            <h1>Sign Up</h1>
            <label for="first-name">First Name</label>
            <input type="text" name="first-name" id="first-name" />
            <label for="last-name">Last Name</label>
            <input type="text" name="last-name" id="last-name" />
            <label for="email">Email</label>
            <input type="email" name="email" id="email" />
            <label for="password">Password</label>
            <input type="password" name="password" id="password" />
            <label for="password">Confirm Password</label>
            <input type="password" name="password" id="confirm-password" />
            <button type="submit">Login</button>
        </div>"
        </>
        )
}