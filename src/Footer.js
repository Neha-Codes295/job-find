const Footer = () => {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white px-5 py-8 text-center text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400">
      <p className="my-1">
        Built for job seekers who want a calm, focused search.
      </p>
      <div className="my-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
        <a
          href="https://github.com/Neha-Codes295"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold no-underline hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/neha-iiitu/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold no-underline hover:underline"
        >
          LinkedIn
        </a>
      </div>
      <p className="my-1">
        &copy; {new Date().getFullYear()} JobFind. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
