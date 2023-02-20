import React from 'react';
import SleepStateManager from './components/sections/sleep-state-manager';
import TwoWayBindingExample from './components/sections/two-way-binding-example';
import CountManager from './components/sections/count-manager';
import ColorManager from './components/sections/color-manager';
import FullnameManager from './components/sections/fullname-manager';
import Button from './components/ui/button';
import Container from './components/ui/container';

const App = () => (
  <main>
    <Container>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 20,
        gap: '0.5rem',
      }}
      >
        <Button>Default</Button>
        <Button variant="contained" color="primary" size="normal">contained-primary-normal</Button>
        <Button variant="contained" color="primary" size="large">contained-primary-large</Button>
        <Button variant="contained" color="secondary" size="normal">contained-secondary-normal</Button>
        <Button variant="contained" color="secondary" size="large">contained-secondary-large</Button>
        <Button variant="outlined" color="primary" size="normal">outlined-primary-normal</Button>
        <Button variant="outlined" color="primary" size="large">outlined-primary-large</Button>
        <Button variant="outlined" color="secondary" size="normal">outlined-secondary-normal</Button>
        <Button variant="outlined" color="secondary" size="large">outlined-secondary-large</Button>
      </div>
    </Container>

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

  </main>
);
export default App;

/*
  Sukurkite komponentą Button, kuriam būtų perduodami propsai:
    * children - tai kas mygtuko viduje
    * type - koks mygtuko tipas (default "button")
    * onClick - dą daryti paspaudus mygtuką (neprivalomas)
    * color - viena iš jūsų pasirinktų ir sukurtų spalvų (neprivalomas + naudoti default vertę)
    * size - vienas iš jūsų pasirinktų ir sukurtų dydžių (neprivalomas + naudoti default vertę)
    * variant - viena iš jūsų sukurtų ir pasirinktų stilių (neprivalomas + naudoti default vertę)
    Idėjų pasisemimui:
      https://mui.com/material-ui/react-button/
*/
