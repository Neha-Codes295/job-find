import { useState, useMemo } from "react";

const formatJobType = (type) => {
  if (!type || typeof type !== "string") return "";
  return type.replace(/_/g, " ");
};

const JobCard = (props) => {
  const { job, showSaveButton = true } = props;
  const [logoFailed, setLogoFailed] = useState(false);
  const [saveHint, setSaveHint] = useState("");

  const initials = useMemo(() => {
    const name = (job.company_name || "?").trim();
    const parts = name.split(/\s+/).filter(Boolean);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase() || "?";
  }, [job.company_name]);

  const tags = Array.isArray(job.tags) ? job.tags : [];
  const jobTypeLabel = formatJobType(job.job_type);

  const handleSave = () => {
    try {
      const savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
      if (!savedJobs.some((savedJob) => savedJob.id === job.id)) {
        savedJobs.push(job);
        localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
        setSaveHint("Saved to your list");
      } else {
        setSaveHint("Already saved");
      }
    } catch {
      setSaveHint("Could not save");
    }
    window.setTimeout(() => setSaveHint(""), 2500);
  };

  const showLogo = job.company_logo_url && !logoFailed;

  return (
    <article className="job-card">
      <div className="job-card__top">
        {showLogo ? (
          <img
            className="job-logo"
            src={job.company_logo_url}
            alt=""
            onError={() => setLogoFailed(true)}
          />
        ) : (
          <div className="job-logo-fallback" aria-hidden="true">
            {initials}
          </div>
        )}
        <div className="job-card__body">
          <h3 className="job-card__title">{job.title}</h3>
          <p className="job-card__company">{job.company_name}</p>
          {jobTypeLabel ? (
            <div className="job-card__badges">
              <span className="job-card__badge">{jobTypeLabel}</span>
            </div>
          ) : null}
          <p className="job-card__meta">{job.candidate_required_location}</p>
          {job.salary ? (
            <p className="job-card__salary">{job.salary}</p>
          ) : null}
        </div>
      </div>
      {tags.length > 0 ? (
        <div className="tags">
          {tags.slice(0, 4).map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      ) : null}
      <div className="job-card__actions">
        <a href={job.url} target="_blank" rel="noopener noreferrer">
          View job →
        </a>
        {showSaveButton ? (
          <button type="button" className="save-button" onClick={handleSave}>
            Save job
          </button>
        ) : null}
      </div>
      {saveHint ? (
        <p className="job-card__feedback" role="status">
          {saveHint}
        </p>
      ) : null}
    </article>
  );
};

export default JobCard;
