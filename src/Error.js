import { useRouteError } from "react-router";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    
    return (
        <div className="page page--error">
            <h1>Oops!</h1>
            <p className="page-lead">Something went wrong.</p>
            <p className="error-detail">
                {err?.status != null ? `${err.status}: ${err.statusText || ""}` : String(err?.message || err || "Unknown error")}
            </p>
            <p>
                <a href="/">Back to home</a>
            </p>
        </div>
    );
}

export default Error;