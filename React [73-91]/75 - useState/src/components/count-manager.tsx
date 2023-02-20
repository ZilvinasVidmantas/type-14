import React from 'react';

const CountManager = () => {
  const [count, setCount] = React.useState<number>(5);

  return (
    <div>
      <h2>Count Manager</h2>
      <div>
        <span>Count:</span>
        <span>{count}</span>
      </div>
      <div>
        <button onClick={() => setCount(count - 1)} type="button">Decrease</button>
        <button onClick={() => setCount(count + 1)} type="button">Increase</button>
      </div>
    </div>
  );
};

export default CountManager;
