import JobCard from "./JobCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router";

const Body = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { searchQuery = "" } = useOutletContext() || {};

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
  const filteredJobs = !q
    ? jobs
    : jobs.filter((job) =>
        `${job.title} ${job.company_name}`
          .toLowerCase()
          .includes(q)
      );

  return (
    <div className="jobs-page page--home">
      {filteredJobs.length === 0 ? (
        <p className="state-message no-matches">No jobs match your search.</p>
      ) : (
        <div className="job-list">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;