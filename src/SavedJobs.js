import JobCard from "./JobCard";

const SavedJobs = () => {
  const saved =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("savedJobs") || "[]")
      : [];

  return (
    <div className="w-full max-w-6xl pb-6">
      <header className="mb-6 border-b border-slate-200 pb-4 dark:border-slate-700">
        <h1 className="mb-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-3xl">
          Saved Jobs
        </h1>
        <p className="m-0 max-w-prose text-slate-600 dark:text-slate-400">
          Here are your saved job listings.
        </p>
      </header>
      {saved.length === 0 ? (
        <div className="flex min-h-[12rem] flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 px-6 py-8 text-center text-sm leading-relaxed text-slate-600 dark:border-slate-600 dark:bg-slate-900/40 dark:text-slate-400">
          <p className="m-0 max-w-md">
            No saved jobs yet. Open a job on the home page and use{" "}
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              Save Job
            </span>{" "}
            to add it here.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 pb-2 sm:grid-cols-2 lg:grid-cols-3">
          {saved.map((job) => (
            <JobCard key={job.id} job={job} showSaveButton={false} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedJobs;
