const JOB_TYPES = [
  { value: "", label: "All job types" },
  { value: "full_time", label: "Full-time" },
  { value: "part_time", label: "Part-time" },
  { value: "contract", label: "Contract" },
  { value: "freelance", label: "Freelance" },
  { value: "internship", label: "Internship" },
  { value: "other", label: "Other" },
];

const CATEGORIES = [
  { value: "", label: "All categories" },
  { value: "Software Development", label: "Software development" },
  { value: "Customer Service", label: "Customer service" },
  { value: "Design", label: "Design" },
  { value: "Marketing", label: "Marketing" },
  { value: "Sales / Business", label: "Sales / business" },
  { value: "Product", label: "Product" },
  { value: "Project Management", label: "Project management" },
  { value: "AI / ML", label: "AI / ML" },
  { value: "Data Analysis", label: "Data analysis" },
  { value: "DevOps / Sysadmin", label: "DevOps / sysadmin" },
  { value: "Finance", label: "Finance" },
  { value: "Human Resources", label: "Human resources" },
  { value: "QA", label: "QA" },
  { value: "Writing", label: "Writing" },
  { value: "Legal", label: "Legal" },
  { value: "Medical", label: "Medical" },
  { value: "Education", label: "Education" },
  { value: "All others", label: "All others" },
];

const Filter = ({
  selectedCategory,
  onCategoryChange,
  selectedJobType,
  onJobTypeChange,
  remoteOnly,
  onRemoteOnlyChange,
  onClearFilters,
}) => {
  return (
    <div className="job-filters" role="search" aria-label="Job filters">
      <label className="job-filters__field">
        <span className="job-filters__label">Category</span>
        <select
          value={selectedCategory}
          onChange={onCategoryChange}
        >
          {CATEGORIES.map(({ value, label }) => (
            <option key={value || "all"} value={value}>
              {label}
            </option>
          ))}
        </select>
      </label>

      <label className="job-filters__field">
        <span className="job-filters__label">Job type</span>
        <select value={selectedJobType} onChange={onJobTypeChange}>
          {JOB_TYPES.map(({ value, label }) => (
            <option key={value || "all-types"} value={value}>
              {label}
            </option>
          ))}
        </select>
      </label>

      <label className="job-filters__field job-filters__field--inline">
        <input
          id="remote-only"
          type="checkbox"
          checked={remoteOnly}
          onChange={(e) => onRemoteOnlyChange(e.target.checked)}
        />
        <span className="job-filters__label">Worldwide-friendly only</span>
      </label>

      <button
        type="button"
        className="job-filters__clear"
        onClick={onClearFilters}
      >
        Clear filters
      </button>
    </div>
  );
};

export default Filter;
