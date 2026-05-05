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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSavedProfile(formData);
    setIsEditing(false);
    alert("Profile saved!");
    localStorage.setItem("profile", JSON.stringify(formData));
  };

  useEffect(() => {
    const storedProfile = localStorage.getItem("profile");
    if (storedProfile) {
      const parsed = JSON.parse(storedProfile);
      setSavedProfile(parsed);
      setFormData(parsed);
      setIsEditing(false);
    }
  }, []);

  const inputClass =
    "mt-1.5 rounded-md border border-slate-300 bg-white px-2.5 py-2 text-sm font-normal text-slate-900 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500/30 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100";

  return (
    <div className="mx-auto w-full max-w-xl pb-6">
      <h1 className="mb-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
        Your profile
      </h1>
      <p className="m-0 text-slate-600 dark:text-slate-400">
        Keep your details handy for applications.
      </p>
      <p className="mt-3 text-slate-700 dark:text-slate-300">
        Add your contact information and résumé so you are ready when the right
        role appears.
      </p>

      {isEditing && (
        <form
          className="mt-6 flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900"
          onSubmit={handleSubmit}
        >
          <label className="flex flex-col text-sm font-semibold text-slate-800 dark:text-slate-200">
            Full Name:
            <input
              type="text"
              name="fullName"
              className={inputClass}
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </label>
          <label className="flex flex-col text-sm font-semibold text-slate-800 dark:text-slate-200">
            Email:
            <input
              type="email"
              name="email"
              className={inputClass}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label className="flex flex-col text-sm font-semibold text-slate-800 dark:text-slate-200">
            Phone Number:
            <input
              type="tel"
              name="phone"
              className={inputClass}
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
          <label className="flex flex-col text-sm font-semibold text-slate-800 dark:text-slate-200">
            Resume:
            <input
              type="file"
              name="resume"
              className={`${inputClass} file:mr-3 file:rounded file:border-0 file:bg-brand-50 file:px-3 file:py-1 file:text-sm file:font-medium file:text-brand-800 dark:file:bg-brand-950/50 dark:file:text-brand-200`}
              onChange={handleChange}
              accept=".pdf,.doc,.docx"
              required
            />
          </label>
          <button
            type="submit"
            className="mt-1 inline-flex w-fit rounded-lg bg-brand-600 px-5 py-2 text-sm font-semibold text-white hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
          >
            Save Profile
          </button>
        </form>
      )}

      {!isEditing && savedProfile && (
        <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <p className="my-2 text-slate-800 dark:text-slate-200">
            <strong>Name:</strong> {savedProfile.fullName}
          </p>
          <p className="my-2 text-slate-800 dark:text-slate-200">
            <strong>Email:</strong> {savedProfile.email}
          </p>
          <p className="my-2 text-slate-800 dark:text-slate-200">
            <strong>Phone:</strong> {savedProfile.phone || "—"}
          </p>
          <p className="my-2 text-slate-800 dark:text-slate-200">
            <strong>Resume:</strong>{" "}
            {savedProfile.resume ? savedProfile.resume.name : "No file uploaded"}
          </p>
          <button
            type="button"
            className="mt-4 rounded-md border border-slate-300 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-800 hover:border-brand-600 hover:bg-brand-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-brand-400"
            onClick={() => setIsEditing(true)}
          >
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
