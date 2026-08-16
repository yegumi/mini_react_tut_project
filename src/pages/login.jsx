import "../assets/css/login.css"
import { useState } from "react";


function Login(){


    const [form , setForm] = useState({
        username:"",
        password:"",
        remember: false
    })

    function handleChange(event){
        const {name, value, checked, type}= event.target;
        setForm({...form, [name]: type === "checkbox" ? checked :  value})  
    }
    function handleSubmit(event){
        event.preventDefault();
    }


    return(
    <div className="login-section">
            <div className="login-card">
                <h1>Welcome back</h1>

                <form onSubmit={handleSubmit}>
                    <div className="field-group">
                        <label>Email or username</label>
                        <input
                            type="text"
                            name="identifier"
                            placeholder="Email or username"
                            value={form.identifier}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="field-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={form.password}
                            onChange={handleChange}
                        />
                    </div>

                    <label className="checkbox-label">
                        <input
                            type="checkbox"
                            name="remember"
                            checked={form.remember}
                            onChange={handleChange}
                        />
                        Remember me
                    </label>

                    <button type="submit">Log in</button>
                </form>
            </div>
        </div>);
}

export default Login;