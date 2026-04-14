import { LOGO_URL } from "../utils/constants";

const Header = ({ searchQuery, onSearchQueryChange }) => {
    return (
        <div className="header">
            <div className="logo">
                <a href="/">
                    <img src={LOGO_URL} alt="Logo" />
                </a>
            </div>

            <div className="search-row header-search">
                <div className="search-bar">
                    <input
                        type="search"
                        placeholder="Search jobs…"
                        value={searchQuery}
                        onChange={(e) => onSearchQueryChange(e.target.value)}
                        aria-label="Search jobs"
                    />
                </div>
            </div>

            <div className="nav">
                <a href="/profile">Profile</a>
                <a href="/saved-jobs">Saved Jobs</a>
            </div>
        </div>
    );
};

export default Header;
