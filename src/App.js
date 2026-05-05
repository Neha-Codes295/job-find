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
        <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-950">
            <a href="#main-content" className="skip-link">
                Skip to main content
            </a>
            <Header
                searchQuery={searchQuery}
                onSearchQueryChange={setSearchQuery}
                darkMode={darkMode}
                onToggleDarkMode={toggleDarkMode}
            />
            <Hero />
            <main
                id="main-content"
                className="mx-auto w-full max-w-6xl flex-1 px-5 pb-10"
                tabIndex={-1}
            >
                <header className="mb-6 border-t border-slate-200 pt-4 dark:border-slate-700">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        JobFind
                    </p>
                    <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-2xl">
                        Discover your next role
                    </h2>
                </header>
                <Outlet context={{ searchQuery, onSearchQueryChange: setSearchQuery }} />
            </main>
            <Footer />
        </div>
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
