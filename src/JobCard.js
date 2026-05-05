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
    <article className="flex flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md motion-reduce:hover:translate-y-0 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-slate-600">
      <div className="mb-3 flex gap-3">
        {showLogo ? (
          <img
            className="h-12 w-12 shrink-0 rounded-md border border-slate-200 bg-slate-50 object-contain dark:border-slate-600 dark:bg-slate-800"
            src={job.company_logo_url}
            alt=""
            onError={() => setLogoFailed(true)}
          />
        ) : (
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-gradient-to-br from-brand-50 to-slate-100 text-base font-bold text-brand-700 dark:border-slate-600 dark:from-brand-950/50 dark:to-slate-800 dark:text-brand-400"
            aria-hidden="true"
          >
            {initials}
          </div>
        )}
        <div className="min-w-0 flex-1">
          <h3 className="mb-1 text-[1.0625rem] font-bold leading-snug tracking-tight text-slate-900 dark:text-slate-100">
            {job.title}
          </h3>
          <p className="mb-2 text-sm font-medium text-slate-600 dark:text-slate-400">
            {job.company_name}
          </p>
          {jobTypeLabel ? (
            <div className="mb-2 flex flex-wrap gap-1.5">
              <span className="inline-block rounded bg-brand-50 px-2 py-0.5 text-[0.7rem] font-semibold uppercase tracking-wide text-brand-700 dark:bg-brand-950/60 dark:text-brand-300">
                {jobTypeLabel}
              </span>
            </div>
          ) : null}
          <p className="m-0 text-[0.8125rem] leading-snug text-slate-600 dark:text-slate-400">
            {job.candidate_required_location}
          </p>
          {job.salary ? (
            <p className="mt-1.5 text-sm font-semibold text-slate-900 dark:text-slate-100">
              {job.salary}
            </p>
          ) : null}
        </div>
      </div>
      {tags.length > 0 ? (
        <div className="mb-3 flex flex-wrap gap-1.5">
          {tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="inline-block rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs font-medium text-slate-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
      <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-slate-100 pt-3 dark:border-slate-800">
        <a
          href={job.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-semibold no-underline hover:underline"
        >
          View job →
        </a>
        {showSaveButton ? (
          <button
            type="button"
            className="rounded-md border border-slate-300 bg-slate-50 px-3.5 py-1.5 text-[0.8125rem] font-semibold text-slate-800 transition hover:border-brand-600 hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-brand-400 dark:hover:bg-brand-950/40"
            onClick={handleSave}
          >
            Save job
          </button>
        ) : null}
      </div>
      {saveHint ? (
        <p
          className="mt-2 text-[0.8125rem] font-medium text-brand-600 dark:text-brand-400"
          role="status"
        >
          {saveHint}
        </p>
      ) : null}
    </article>
  );
};

export default JobCard;
