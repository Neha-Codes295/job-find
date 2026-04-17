import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = ({
  searchQuery,
  onSearchQueryChange,
  darkMode,
  onToggleDarkMode,
}) => {
  return (
    <header className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200 bg-white px-4 py-3 dark:border-neutral-700 dark:bg-neutral-900">
      <Link to="/" className="shrink-0">
        <img
          src={LOGO_URL}
          alt="JobFind"
          className="block h-16 w-auto md:h-20"
        />
      </Link>

      <div className="order-3 flex w-full min-w-0 flex-[1_1_100%] justify-center sm:order-none sm:flex-[1_1_12rem] sm:max-w-md">
        <input
          type="search"
          placeholder="Search jobs…"
          value={searchQuery}
          onChange={(e) => onSearchQueryChange(e.target.value)}
          aria-label="Search jobs"
          className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-neutral-900 placeholder:text-neutral-400 focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-blue-600 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder:text-neutral-500 dark:focus:outline-blue-400"
        />
      </div>

      <div className="flex shrink-0 flex-wrap items-center gap-3 sm:gap-4">
        <nav className="flex items-center gap-4 text-sm font-medium text-neutral-800 dark:text-neutral-200">
          <Link
            to="/profile"
            className="no-underline hover:underline"
          >
            Profile
          </Link>
          <Link
            to="/saved-jobs"
            className="no-underline hover:underline"
          >
            Saved Jobs
          </Link>
        </nav>
        <button
          type="button"
          onClick={onToggleDarkMode}
          className="rounded-md border border-neutral-300 bg-neutral-100 px-3 py-1.5 text-sm font-medium text-neutral-800 hover:bg-neutral-200 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700"
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
