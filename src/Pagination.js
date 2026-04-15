import React, { useState } from 'react';

const Pagination = ({ items }) => {
  const [visible, setVisible] = useState(6);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 6);
  };

  return (
    <div>
      <ul>
        {items.slice(0, visible).map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      {visible < items.length && (
        <button onClick={showMoreItems}>Load More</button>
      )}
    </div>
  );
};

export default Pagination;