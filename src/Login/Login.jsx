import './Login.css';
import { useState } from 'react';
function Login(){
    const [login,setLogin] = useState(true);
    const loginSwitch=()=>{
        setLogin(!login);
    }
    return(
        <div className="login-wrapper">
            <div className='wrapper'>
                <img id="instaLogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtjBw4xwF01ZdKL1cmnYZD3vdavlQPOWA7w&usqp=CAU" alt="insta-logo" />

                <input hidden={login} className='inputField' placeholder="Mobile Number or Email" />
                <input hidden={login} className='inputField' placeholder="Full Name" />

                <input className='inputField' placeholder="Phone Number,username or email" />

                <input className='inputField' placeholder="Password" />

                <button id="signInBtn">
                    {login? "Sign In" : "Sign Up"}
                </button>
                <p id="signUpHeading">
                    {login? "Don't have an account?" : "Have an account!"}
                    <span onClick={loginSwitch}>{login? " Sign Up" : " Log In"}</span> 
                </p>
            </div>
        </div>
    )
}
export default Login;