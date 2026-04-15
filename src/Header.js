import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

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
                <Link to="/profile">Profile</Link>
                <Link to="/saved-jobs">Saved Jobs</Link>
            </div>
        </div>
    );
};

export default Header;
