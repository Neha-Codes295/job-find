import JobCard from "./JobCard";

const SavedJobs = () => {
    return (
        <div className="page saved-jobs">
            <header className="saved-jobs__header">
                <h1>Saved Jobs</h1>
                <p className="page-lead">Here are your saved job listings.</p>
            </header>
            <div className="job-list saved-jobs__list">
                {JSON.parse(localStorage.getItem('savedJobs') || '[]').map((job) => (
                    <JobCard key={job.id} job={job} showSaveButton={false} />
                ))}
            </div>
        </div>
    );
};

export default SavedJobs;