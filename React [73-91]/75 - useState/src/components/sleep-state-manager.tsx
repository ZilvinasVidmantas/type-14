import React from 'react';

type SleepState = 'awake' | 'asleep';

const SleepStateManager = () => {
  const [sleepState, setSleepState] = React.useState<SleepState>('asleep');

  const handleSleepStateBtnClick = () => {
    if (sleepState === 'awake') {
      setSleepState('asleep');
    } else {
      setSleepState('awake');
    }
  };

  return (
    <div>
      <h2>Sleep State Manager</h2>
      <div>
        <span>Sleep state:</span>
        <span>{sleepState}</span>
      </div>
      <div>
        <button onClick={handleSleepStateBtnClick} type="button">Change sleep State</button>
      </div>
    </div>
  );
};

export default SleepStateManager;
