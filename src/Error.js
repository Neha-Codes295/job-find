import { useRouteError } from "react-router";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    
    return (
        <div className="page page--error">
            <div className="error-panel">
                <h1>Oops</h1>
                <p className="page-lead">Something went wrong.</p>
                <p className="error-detail">
                    {err?.status != null
                        ? `${err.status}: ${err.statusText || ""}`
                        : String(err?.message || err || "Unknown error")}
                </p>
                <p className="error-panel__actions">
                    <a href="/">Back to home</a>
                </p>
            </div>
        </div>
    );
}

export default Error;