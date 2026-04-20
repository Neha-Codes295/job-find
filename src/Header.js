import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = ({
  searchQuery,
  onSearchQueryChange,
  darkMode,
  onToggleDarkMode,
}) => {
  return (
    <header className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-white px-4 py-4 shadow-sm dark:border-slate-600 dark:bg-slate-900 sm:gap-4 sm:px-5 sm:py-4">
      <Link to="/" className="shrink-0">
        <img
          src={LOGO_URL}
          alt="JobFind"
          className="block h-14 w-auto sm:h-16 md:h-[4.5rem]"
        />
      </Link>

      <div className="order-3 flex w-full min-w-0 flex-[1_1_100%] justify-center sm:order-none sm:flex-[1_1_12rem] sm:max-w-md">
        <label htmlFor="job-search" className="relative w-full max-w-full">
          <span
            className="pointer-events-none absolute left-3 top-1/2 z-[1] -translate-y-1/2 text-slate-500 dark:text-slate-400"
            aria-hidden
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.3-4.3" />
            </svg>
          </span>
          <input
            id="job-search"
            type="search"
            placeholder="Search by title or company…"
            value={searchQuery}
            onChange={(e) => onSearchQueryChange(e.target.value)}
            aria-label="Search jobs by title or company"
            className="w-full rounded-lg border-2 border-slate-400 bg-slate-50 py-2.5 pl-10 pr-3 text-sm font-medium text-slate-900 shadow-inner placeholder:font-normal placeholder:text-slate-600 focus:border-brand-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/35 dark:border-slate-500 dark:bg-slate-800/80 dark:text-slate-100 dark:placeholder:text-slate-400 dark:focus:border-brand-400 dark:focus:bg-slate-800 dark:focus:ring-brand-400/30"
          />
        </label>
      </div>

      <div className="flex shrink-0 flex-wrap items-center gap-3 sm:gap-4">
        <nav className="flex items-center gap-5 text-sm font-semibold text-slate-700 dark:text-slate-200">
          <Link
            to="/profile"
            className="no-underline transition-colors hover:text-brand-600 dark:hover:text-brand-400"
          >
            Profile
          </Link>
          <Link
            to="/saved-jobs"
            className="no-underline transition-colors hover:text-brand-600 dark:hover:text-brand-400"
          >
            Saved jobs
          </Link>
        </nav>
        <button
          type="button"
          onClick={onToggleDarkMode}
          className="rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
          aria-pressed={darkMode}
          aria-label={darkMode ? "Use light mode" : "Use dark mode"}
        >
          {darkMode ? "Light" : "Dark"}
        </button>
      </div>
    </header>
  );
};

export default Header;
