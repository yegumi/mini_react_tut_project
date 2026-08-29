import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function EditProfile({ token }) {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        username: "",
        name: "",
        email: "",
        birthdate: ""
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProfile() {
            const response = await fetch("http://127.0.0.1:8000/api/auth/profile/", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const data = await response.json();
            setForm({
                username: data.username,
                name: data.name || "",
                email: data.email,
                birthdate: data.birthdate || ""
            });
            setLoading(false);
        }

        fetchProfile();
    }, [token]);

    function handleChange(event) {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const response = await fetch("http://127.0.0.1:8000/api/auth/profile/", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(form)
        });

        const data = await response.json();

        if (!response.ok) {
            setError(JSON.stringify(data));
            return;
        }

        navigate("/profile");
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="register-section">
            <h1>Edit your profile</h1>

            <form onSubmit={handleSubmit}>
                <div className="field-group">
                    <label>Username</label>
                    <input type="text" name="username" value={form.username} onChange={handleChange} />
                </div>

                <div className="field-group">
                    <label>Name</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} />
                </div>

                <div className="field-group">
                    <label>Email</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} />
                </div>

                <div className="field-group">
                    <label>Birthdate</label>
                    <input type="date" name="birthdate" value={form.birthdate} onChange={handleChange} />
                </div>

                {error && <p className="form-error">{error}</p>}

                <button type="submit">Save changes</button>
            </form>
        </div>
    );
}

export default EditProfile;