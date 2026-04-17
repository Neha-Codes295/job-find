import React, { useState, useLayoutEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Header";
import Body from "./Body";
import Profile from "./Profile";
import SavedJobs from "./SavedJobs";
import Error from "./Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Hero from "./Hero";
import Footer from "./Footer";

const THEME_KEY = "jobfind-theme";

const AppLayout = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [darkMode, setDarkMode] = useState(() => {
        try {
            return localStorage.getItem(THEME_KEY) === "dark";
        } catch {
            return false;
        }
    });

    useLayoutEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode((prev) => {
            const next = !prev;
            try {
                localStorage.setItem(THEME_KEY, next ? "dark" : "light");
            } catch {
                /* ignore */
            }
            return next;
        });
    };

    return (
        <>
            <Header
                searchQuery={searchQuery}
                onSearchQueryChange={setSearchQuery}
                darkMode={darkMode}
                onToggleDarkMode={toggleDarkMode}
            />
            <Hero />
            <main className="shell">
                <p className="site-greeting">Hello, Job Searchers!</p>
                <Outlet context={{ searchQuery, onSearchQueryChange: setSearchQuery }} />
            </main>
            <Footer />
        </>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/profile",
                element: <Profile />,
            },
            {
                path: "/saved-jobs",
                element: <SavedJobs />,
            },
        ],
        errorElement: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
