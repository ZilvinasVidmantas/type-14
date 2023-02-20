import React from 'react';
import SleepStateManager from './components/sleep-state-manager';
import TwoWayBindingExample from './components/two-way-binding-example';
import CountManager from './components/count-manager';
import ColorManager from './components/color-manager';
import FullnameManager from './components/fullname-manager';
import Container from './components/container';

const App = () => (
  <main>
    <Container>
      <SleepStateManager />
      <hr />
      <hr />

      <TwoWayBindingExample />

      <hr />
      <hr />
      <CountManager />

      <hr />
      <hr />
      <ColorManager />

      <hr />
      <hr />
      <FullnameManager />
    </Container>
  </main>
);
export default App;
