import './styles.css'
import { useState } from 'react'



const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className="container w-full">
            <div className="form flex">
                <div className="header">
                    <h2 className="">Welcome back!</h2>
                    <p>Please enter your details.</p>
                </div>

                <form action="/login" className='main-form'>
                    <div>
                        <label htmlFor="email">Email</label> <br />
                        <input type="email" name="email" id="email" placeholder="Email" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label> <br />
                        <input type="password" name="password" id="password" placeholder="Password" />
                    </div>
                    <div className="remember-container">
                        <div className='remember'>
                            <input type="checkbox" name="remember" id="remember" />
                            <span>Remember me</span>
                        </div>

                        <a href="/forgot-password">Forgot password?</a>
                    </div>
                    <div className='buttons'>
                        <button type="submit">Sign in</button> <br />
                        <button type="submit">Sign in with Google</button>
                    </div>
                    <div className='dont-have-an-account-container'>
                        <p>Don't have an account?</p>
                        <a href="/register">Sign up</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login