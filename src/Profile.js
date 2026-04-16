import { useState, useEffect } from "react";

const Profile = () => {

    const [formData, setFormData] = useState(() => {
        const saved = localStorage.getItem("profile");
        if (!saved) {
          return { fullName: "", email: "", phone: "", resume: null };
        }
        const parsed = JSON.parse(saved);
        return {
          fullName: parsed.fullName ?? "",
          email: parsed.email ?? "",
          phone: parsed.phone ?? "",
          resume: null, 
        };
      });

    const [savedProfile, setSavedProfile] = useState(null);
    const [isEditing, setIsEditing] = useState(true);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: files ? files[0] : value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSavedProfile(formData);
        setIsEditing(false);
        alert("Profile saved!");
        localStorage.setItem("profile", JSON.stringify(formData));
    }

    useEffect(() => {
        const storedProfile = localStorage.getItem("profile");
        if (storedProfile) {
            const parsed = JSON.parse(storedProfile);
            setSavedProfile(parsed);
            setFormData(parsed);
            setIsEditing(false);
        }
    }, []);

    return (
        <div className="page">
            <h1>Your Profile</h1>
            <p className="page-lead">This is about Job Searcher</p>
            <p>Please fill out your personal information and upload your resume to get started.</p>

            {isEditing && (
                <form className="profile-form" onSubmit={handleSubmit}>
                    <label>
                        Full Name:
                        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </label>
                    <label>
                        Phone Number:
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                    </label>
                    <label>
                        Resume:
                        <input type="file" name="resume" onChange={handleChange} accept=".pdf,.doc,.docx" required />
                    </label>
                    <button type="submit">Save Profile</button>
                </form>
            )}

            {!isEditing && savedProfile && (
                <div className="profile-card">
                    <p><strong>Name:</strong> {savedProfile.fullName}</p>
                    <p><strong>Email:</strong> {savedProfile.email}</p>
                    <p><strong>Phone:</strong> {savedProfile.phone || "—"}</p>
                    <p>
                        <strong>Resume:</strong>{" "}
                        {savedProfile.resume ? savedProfile.resume.name : "No file uploaded"}
                    </p>
                    <button onClick={() => setIsEditing(true)}>Edit Profile</button>
                </div>
            )}
        </div>
    );
};

export default Profile;