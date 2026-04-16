import React, { useState, useEffect } from 'react';

const Pagination = ({ items, jobList }) => {
  const [visible, setVisible] = useState(6);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 6);
  };

  useEffect(() => {
    setVisible(6);
  }, [items]);

  return (
    <div className="pagination">
      <div className="job-list">
        {items.slice(0, visible).map((job) => (
          jobList(job)
        ))}
      </div>

      {visible < items.length && (
        <div className="pagination__actions">
          <button type="button" className="load-more" onClick={showMoreItems}>
            Load more
          </button>
        </div>
      )}
    </div>
  );
};

export default Pagination;