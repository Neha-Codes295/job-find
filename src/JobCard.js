const JobCard = (props) => {
    const { job } = props;

    return (
        <div className="job-card">
            <img
                className="job-logo"
                src={job.company_logo_url}
                alt={"C-Logo"}
            />
            <h3>{job.title}</h3>
            <h4>{job.company_name}</h4>
            <h4>{job.category}</h4>
            <h4>{job.publication_date}</h4>
            <p>{job.job_type}</p>
            <p>{job.candidate_required_location}</p>
            <h3>{job.salary}</h3>
            <div className="tags">
                {job.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="tag">
                        {tag}
                    </span>
                ))}
            </div>
            <a href={job.url} target="_blank" rel="noreferrer">
                View Job →
            </a>
            <button className="save-button" onClick={() => alert('Job saved!')} >Save Job</button>
        </div>
    );
};

export default JobCard;