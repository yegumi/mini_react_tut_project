import { useState} from "react";
import "../assets/css/register.css"
function Register(){
    const [form, setForm] = useState(
        {name:"",
         username:"",
         email:"",
         birthdate:""   
        }
    );
    function HandleChange(event){
    const {name, value}= event.target
    setForm({...form, [name]:value})}
    function HandleSubmit(event){
        event.preventDefault();
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
                    <input type="text" name="name" placeholder="name" value={form.name} onChange={HandleChange}></input>
                    <input type="text" name="username" placeholder="username" value={form.username}onChange={HandleChange}></input>
                    <input type="email" name="email" placeholder="email" value={form.email}onChange={HandleChange}></input>
                    <input type="date"  name="birthdate" value={form.birthdate} onChange={HandleChange}></input>

                    <button type="submit"> create account</button>
                 </form>
        
        </div>
    );
}
export default Register;