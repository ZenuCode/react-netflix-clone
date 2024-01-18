import React, { useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {
    const [rememberLogin, setRememberLogin] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handlerFormSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
    }

    return (
        <>
            <div className="top-image">
                <img className="" src="" alt="///" />
            </div>

            <div>
                <div>
                    <div>
                        <h1>Login</h1>
                        <form 
                            onSubmit={handlerFormSubmit}
                            className="signup-form"
                        >
                            <input 
                                type="email" 
                                placeholder="email" 
                                autoComplete="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input 
                                type="password" 
                                placeholder="password" 
                                autoComplete="current-password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button className="login-btn">Log In</button>
                            <div>
                                <p>
                                    <input 
                                        type="checkbox" 
                                        className="form-checkbox" 
                                        checked={rememberLogin}
                                        onChange={(e) => setRememberLogin(!rememberLogin)}
                                        value="Remember Me"
                                    />
                                </p>
                                <p>Need Help?</p>
                            </div>
                            <p>
                                <span>New to Netflix?</span>
                                <Link to='/signup'>Sign Up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;