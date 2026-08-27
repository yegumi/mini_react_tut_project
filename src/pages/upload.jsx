import { useState, useRef, useContext } from "react";
import "../assets/css/upload.css"
const allowedTypes = ["image/jpeg", "image/png", "image/svg+xml"];
import { PostContext } from "../context/PostsContext";

function Upload(){
     const { AddCard } = useContext(PostContext);
    const fileInputRef = useRef(null)
    const [logo, setLogo] = useState(null);
    const [previewurl, setPreviewUrl] = useState(null);
    const [error, setError] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    

    function HandleFileChange(event){
        const file = event.target.files[0]; // we only take one logo each time
        if (!file) return;
        if (!allowedTypes.includes(file.type)){
           setError(" please upload a JPG, PNG, or SVG file");
           setLogo("null");
           setPreviewUrl("null");
           return;
        }
        setError("");
        setLogo(file);
        const url = URL.createObjectURL(file);
        setPreviewUrl(url);
        console.log("preview url:", url);
    }

    async function HandleSubmit(event) {
    event.preventDefault();

    if (!name.trim()) {
        setError("please enter a name");
        return;
    }

    if (!description.trim()) {
        setError("please enter a description");
        return;
    }

    if (!logo) {
        setError("please choose a file first");
        return;
    }

    const result = await AddCard(name, description, logo);

    if (!result.success) {
        setError(JSON.stringify(result.error));
        return;
    }

    // Only clear the form after successful upload
    setName("");
    setDescription("");
    setLogo(null);
    setPreviewUrl(null);
    setError("");

    fileInputRef.current.value = "";
}


    return(
        <div className="Uplaod-section">
            <h1>
                Upload your logo
            </h1>
            <form onSubmit={HandleSubmit}>
                <input type='file'
                ref={fileInputRef} 
                placeholder="choose from your local storage"
                accept=".jpg, .jpeg, .png, .svg"
                onChange={HandleFileChange}/>
                    {error && <p className="form-error">{error}</p>}
                    {previewurl && <img src={previewurl} alt="preview" className="logo-preview" />}
                    <input
                        type="text"
                        placeholder="Logo name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />

                    <textarea
                        placeholder="Description"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                <button type="submit">upload</button>
            </form>
                
        </div>
    );
}

export default Upload;