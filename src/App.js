import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Header";
import Body from "./Body";
import Profile from "./Profile";
import SavedJobs from "./SavedJobs";
import Error from "./Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Hero from "./Hero";

const AppLayout = () => {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <>
            <Header
                searchQuery={searchQuery}
                onSearchQueryChange={setSearchQuery}
            />
            <Hero />
            <main className="shell">
                <p className="site-greeting">Hello, Job Searchers!</p>
                <Outlet context={{ searchQuery, onSearchQueryChange: setSearchQuery }} />
            </main>
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
