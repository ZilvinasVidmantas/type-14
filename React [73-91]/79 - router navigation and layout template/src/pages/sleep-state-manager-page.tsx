import React from 'react';
import Section from '../components/ui/section';

type SleepState = 'awake' | 'asleep';

const SleepStateManagerPage = () => {
  const [sleepState, setSleepState] = React.useState<SleepState>('asleep');

  const handleSleepStateBtnClick = () => {
    if (sleepState === 'awake') {
      setSleepState('asleep');
    } else {
      setSleepState('awake');
    }
  };

  return (
    <Section title="Sleep State Manager">
      <div>
        <span>Sleep state:</span>
        <span>{sleepState}</span>
      </div>
      <div>
        <button onClick={handleSleepStateBtnClick} type="button">Change sleep State</button>
      </div>
    </Section>
  );
};

export default SleepStateManagerPage;
