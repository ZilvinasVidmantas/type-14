import React from 'react';
import Section from '../ui/section';
import TextField from '../ui/text-field';

const TwoWayBindingExample = () => {
  const [text, setText] = React.useState('pradine reiksme');

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setText(value);
  };

  return (
    <Section title="Two way binding example">
      <TextField
        label="Name"
        value={text}
        onChange={handleTextChange}
      />
      <div style={{ border: '1px solid red', height: '20px', color: 'purple' }}>
        {text}
      </div>
    </Section>
  );
};

export default TwoWayBindingExample;
