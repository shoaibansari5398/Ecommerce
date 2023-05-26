import { useContext, useState } from "react"
import "./Signup.css"
import { AuthContext } from "../../Context/AuthContext"
import { useNavigate } from "react-router-dom"


export default function Signup(){

    const navigate = useNavigate()
    const {signupHandler} = useContext(AuthContext)
    const [userData, setUserData] = useState({firstName:"",lastName:"",email:"",password:"",confirmPassword:""})

    const userSignupHandler=(e)=>{
        e.preventDefault();
        if(!userData.firstName.trim() || !userData.lastName.trim() || !userData.email.trim() || !userData.password.trim() || !userData.confirmPassword.trim())
        {
            alert("All fields are required")
        }
        else if(userData.password !== userData.confirmPassword) {
            alert("Password is incorrect")
        }
        else{
            signupHandler(userData)
            navigate("/")
        }
    }

    return(
            <>
        <div class="signup-container">
            <form onSubmit={(e)=>userSignupHandler(e)}>
            <h1>Sign Up</h1>
            <label for="first-name">First Name</label>
            <input type="text" id="first-name" value={userData.firstName} onChange={(e)=>setUserData({...userData,firstName:e.target.value})} />
            <label for="last-name">Last Name</label>
            <input type="text" id="last-name" value={userData.lastName} onChange={(e)=>setUserData({...userData,lastName:e.target.value})}/>
            <label for="email">Email</label>
            <input type="email"  id="email" value={userData.email} onChange={(e)=>setUserData({...userData,email:e.target.value})}/>
            <label for="password">Password</label>
            <input type="password" id="password" value={userData.password} onChange={(e)=>setUserData({...userData,password:e.target.value})}/>
            <label for="password">Confirm Password</label>
            <input type="password" id="confirm-password" value={userData.confirmPassword} onChange={(e)=>setUserData({...userData,confirmPassword:e.target.value})}/>
            <button type="submit">Login</button>
            </form>
        </div>"
        </>
        )
}