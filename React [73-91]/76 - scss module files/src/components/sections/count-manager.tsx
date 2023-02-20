import React from 'react';
import Section from '../ui/section';

const CountManager = () => {
  const [count, setCount] = React.useState<number>(5);

  return (
    <Section title="Count Manager">
      <div>
        <span>Count:</span>
        <span>{count}</span>
      </div>
      <div>
        <button onClick={() => setCount(count - 1)} type="button">Decrease</button>
        <button onClick={() => setCount(count + 1)} type="button">Increase</button>
      </div>
    </Section>
  );
};

export default CountManager;
