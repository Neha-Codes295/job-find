import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center px-5 py-12">
      <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <h1 className="mb-2 text-2xl font-bold text-slate-900 dark:text-slate-100">
          Oops
        </h1>
        <p className="m-0 text-slate-600 dark:text-slate-400">
          Something went wrong.
        </p>
        <p className="mt-3 break-words text-sm text-slate-500 dark:text-slate-500">
          {err?.status != null
            ? `${err.status}: ${err.statusText || ""}`
            : String(err?.message || err || "Unknown error")}
        </p>
        <p className="mt-6">
          <a
            href="/"
            className="inline-flex font-semibold no-underline hover:underline"
          >
            Back to home
          </a>
        </p>
      </div>
    </div>
  );
};

export default Error;
