import "../assets/css/login.css"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function Login(){
    const navigate = useNavigate()
    const [error, setError]= useState("")
    const [form , setForm] = useState({
        identifier:"",
        password:"",
        remember: false
    })

    function handleChange(event){
        const {name, value, checked, type}= event.target;
        setForm({...form, [name]: type === "checkbox" ? checked :  value})  
    }
    async function handleSubmit(event){
        event.preventDefault();
        try {
            const response = await fetch ("http://127.0.0.1:8000/api/auth/login/", {
                method :"POST",
                headers: {"Content-Type":"application/json"},
                body:JSON.stringify({
                    username: form.identifier,
                    password:form.password
                })
            });
        
        if (!response.ok){
            const data = await response.json();
    console.log("LOGIN ERROR:", data);
    setError(JSON.stringify(data));
    return;
        }
        const data = await response.json();
        localStorage.setItem("accessToken", data.access);
        localStorage.setItem("refreshToken", data.refresh);

        navigate("/");

    }catch(err){
        setError("sth happened, please try again later")
    }
}



    return(
    <div className="login-section">
            <div className="login-card">
                <h1>Welcome back</h1>

                <form onSubmit={handleSubmit}>
                    <div className="field-group">
                        <label>username</label>
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

                    <p className="register-link"> <Link to="/register"> new user?</Link></p>
                    {error && <p className="form-error">{error}</p>}
                    <button type="submit">Log in</button>
                </form>
            </div>
        </div>);
}

export default Login;