import React, { useState, useEffect } from "react";

const Pagination = ({ items, jobList }) => {
  const [visible, setVisible] = useState(6);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 6);
  };

  useEffect(() => {
    setVisible(6);
  }, [items]);

  return (
    <div className="pb-2">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.slice(0, visible).map((job) => jobList(job))}
      </div>

      {visible < items.length && (
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            className="rounded-lg bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
            onClick={showMoreItems}
          >
            Load more
          </button>
        </div>
      )}
    </div>
  );
};

export default Pagination;
