import JobCard from "./JobCard";
import Shimmer from "./Shimmer";
import Filter from "./Filter";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router";
import Pagination from "./Pagination";

const Body = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedJobType, setSelectedJobType] = useState("");
  const [remoteOnly, setRemoteOnly] = useState(false);

  const { searchQuery = "", onSearchQueryChange } = useOutletContext() || {};

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://remotive.com/api/remote-jobs");
      const data = await response.json();

      const validJobs = data.jobs.filter((job) => job.id);

      setJobs(validJobs);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="w-full max-w-none">
        <Shimmer />
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900"
        role="alert"
      >
        <p className="m-0 font-medium text-slate-900 dark:text-slate-100">
          Could not load jobs.
        </p>
        <p className="mt-2 break-words text-sm text-slate-600 dark:text-slate-400">
          {error}
        </p>
      </div>
    );
  }

  if (jobs.length === 0) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <p className="m-0 text-slate-700 dark:text-slate-300">No jobs found.</p>
      </div>
    );
  }

  const q = searchQuery.trim().toLowerCase();

  let list = jobs;
  if (q) {
    list = list.filter((job) =>
      `${job.title} ${job.company_name}`.toLowerCase().includes(q)
    );
  }
  if (selectedCategory) {
    list = list.filter(
      (job) => job.category?.toLowerCase() === selectedCategory.toLowerCase()
    );
  }

  if (selectedJobType) {
    list = list.filter(
      (job) =>
        (job.job_type || "").toLowerCase() === selectedJobType.toLowerCase()
    );
  }

  if (remoteOnly) {
    list = list.filter((job) => {
      const loc = (job.candidate_required_location || "").toLowerCase();
      return (
        loc.includes("worldwide") ||
        loc.includes("anywhere") ||
        loc.includes("fully remote") ||
        loc === "remote"
      );
    });
  }

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleJobTypeChange = (e) => {
    setSelectedJobType(e.target.value);
  };

  const clearFilters = () => {
    setSelectedCategory("");
    setSelectedJobType("");
    setRemoteOnly(false);
    onSearchQueryChange?.("");
  };

  return (
    <div className="w-full pb-4" id="browse-jobs">
      <section
        className="mb-5 rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900"
        aria-label="Search and filters"
      >
        <Filter
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          selectedJobType={selectedJobType}
          onJobTypeChange={handleJobTypeChange}
          remoteOnly={remoteOnly}
          onRemoteOnlyChange={setRemoteOnly}
          onClearFilters={clearFilters}
        />
        <p
          className="mt-4 border-t border-slate-200 pt-3 text-sm font-medium text-slate-600 dark:border-slate-700 dark:text-slate-400"
          role="status"
        >
          Showing{" "}
          <strong className="font-bold text-slate-900 dark:text-slate-100">
            {list.length}
          </strong>{" "}
          {list.length === 1 ? "role" : "roles"}
          {q || selectedCategory || selectedJobType || remoteOnly
            ? " matching your filters"
            : " available"}
        </p>
      </section>
      {list.length === 0 ? (
        <p className="mt-4 rounded-lg border border-dashed border-slate-300 bg-slate-50 px-5 py-4 text-center text-sm text-slate-600 dark:border-slate-600 dark:bg-slate-900/50 dark:text-slate-400">
          No jobs match your search or filters.
        </p>
      ) : (
        <Pagination
          items={list}
          jobList={(job) => <JobCard key={job.id} job={job} />}
        />
      )}
    </div>
  );
};

export default Body;
