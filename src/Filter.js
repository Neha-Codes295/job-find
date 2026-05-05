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

const selectClass =
  "min-w-[14rem] rounded-md border border-slate-300 bg-white px-2.5 py-2 text-sm text-slate-900 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500/30 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-brand-400 dark:focus:ring-brand-400/25";

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
    <div
      className="flex flex-wrap items-end gap-4 gap-y-4 md:gap-x-6"
      role="search"
      aria-label="Job filters"
    >
      <label className="flex min-w-[12rem] flex-col gap-1.5 text-sm">
        <span className="font-semibold text-slate-800 dark:text-slate-200">
          Category
        </span>
        <select
          className={selectClass}
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

      <label className="flex min-w-[12rem] flex-col gap-1.5 text-sm">
        <span className="font-semibold text-slate-800 dark:text-slate-200">
          Job type
        </span>
        <select
          className={selectClass}
          value={selectedJobType}
          onChange={onJobTypeChange}
        >
          {JOB_TYPES.map(({ value, label }) => (
            <option key={value || "all-types"} value={value}>
              {label}
            </option>
          ))}
        </select>
      </label>

      <label className="flex cursor-pointer items-center gap-2 text-sm">
        <input
          id="remote-only"
          type="checkbox"
          className="h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500 dark:border-slate-600 dark:bg-slate-800"
          checked={remoteOnly}
          onChange={(e) => onRemoteOnlyChange(e.target.checked)}
        />
        <span className="font-semibold text-slate-800 dark:text-slate-200">
          Worldwide-friendly only
        </span>
      </label>

      <button
        type="button"
        className="rounded-md border border-slate-300 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-brand-600 hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-brand-400 dark:hover:bg-brand-950/40"
        onClick={onClearFilters}
      >
        Clear filters
      </button>
    </div>
  );
};

export default Filter;
