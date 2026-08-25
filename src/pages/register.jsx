import { useState } from "react";
import "../assets/css/register.css"
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate()
    const [form, setForm] = useState(
        { name: "",
          username: "",
          email: "",
          birthdate: "",
          password: "",
          confirm_password: ""
        }
    );
    const [error, setError] = useState("");

    function HandleChange(event) {
        const { name, value } = event.target
        setForm({ ...form, [name]: value })
    }

    async function HandleSubmit(event) {
        event.preventDefault();

        if (form.password !== form.confirm_password) {
            setError("Passwords don't match");
            return;
        }

        setError("");
        // continue with your actual submit logic here
        try {
            const response = await fetch("http://127.0.0.1:8000/api/auth/register/",{ method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(form)
            })
            if (!response.ok) {
                const data = await response.json();
                setError(JSON.stringify(data));
                return;

}
                
        const data = await response.json();
        navigate("/login")
    } catch(err){
            setError("sth went wrong, please try again")
            console.log(err)
        }
    }
            

    

    return (
        <div className="register-section">
            <h1> Hey are you new here?</h1>
            <p>
                this website is made for people who loves doodling logos and creating little pieces of art. You dont have to be 
                a logo artist to share your art. Any drawing picture, any pen doodling and doodles even in the corner of your noteboks
                will be welcomed here. keep and share all your work here where other people can see it too and make new friends here.
                 </p>
                 <h3>So what do you say? wanna join us?^.^</h3>
                 <form onSubmit={HandleSubmit}>
                    <div className="field-group">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="name" value={form.name} onChange={HandleChange} />
                    </div>

                    <div className="field-group">
                        <label>Username</label>
                        <input type="text" name="username" placeholder="username" value={form.username} onChange={HandleChange} />
                    </div>

                    <div className="field-group">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="email" value={form.email} onChange={HandleChange} />
                    </div>

                    <div className="field-group">
                        <label>Birthdate</label>
                        <input type="date" name="birthdate" value={form.birthdate} onChange={HandleChange} />
                    </div>

                    <div className="field-group">
                        <label>Password</label>
                        <input type="password" name="password" placeholder="set a new password" value={form.password} onChange={HandleChange} />
                    </div>

                    <div className="field-group">
                        <label>Confirm password</label>
                        <input type="password" name="confirm_password" placeholder="confirm password" value={form.confirmPassword} onChange={HandleChange} />
                    </div>

                    {error && <p className="form-error">{error}</p>}

                    <button type="submit"> create account</button>
                 </form>
        
        </div>
    );
}
export default Register;