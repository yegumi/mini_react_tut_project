import { useState, useRef } from "react";
import "../assets/css/upload.css"
const allowedTypes = ["image/jpeg", "image/png", "image/svg+xml"];

function Upload(){
    const fileInputRef = useRef(null)
    const [logo, setLogo] = useState(null);
    const [previewurl, setPreviewUrl] = useState(null);
    const [error, setError] = useState("");
    

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
        setPreviewUrl(URL.createObjectURL(file));
        setPreviewUrl(URL.createObjectURL(file));
        console.log("preview url:", URL.createObjectURL(file));
    }

    function HandleSubmit(event){
        event.preventDefault();
        if (!logo){
            setError("please choose a file first");
            return;
        }
        // no backend yet
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
                <button type="submit">upload</button>
            </form>
                
        </div>
    );
}

export default Upload;