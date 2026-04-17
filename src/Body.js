import JobCard from "./JobCard";
import Shimmer from "./Shimmer";
import Filter from './Filter';
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
      <div className="page page--home">
        <Shimmer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="page state-message" role="alert">
        <p>Could not load jobs.</p>
        <p className="error-detail">{error}</p>
      </div>
    );
  }

  if (jobs.length === 0) {
    return (
      <div className="page state-message">
        <p>No jobs found.</p>
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
    <div className="jobs-page page--home">
      <Filter
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        selectedJobType={selectedJobType}
        onJobTypeChange={handleJobTypeChange}
        remoteOnly={remoteOnly}
        onRemoteOnlyChange={setRemoteOnly}
        onClearFilters={clearFilters}
      />
      {list.length === 0 ? (
        <p className="state-message no-matches">No jobs match your search.</p>
      ) : (
        <Pagination
          items={list}
          jobList={(job) => <JobCard key={job.id} job={job} />} />
      )}
    </div>
  );
};

export default Body;