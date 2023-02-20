import React from 'react';

const TwoWayBindingExample = () => {
  const [text, setText] = React.useState('pradine reiksme');

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setText(value);
  };

  return (
    <div>
      <h2>Two way binding example</h2>
      <div>
        <label htmlFor="super-id">Tekstas</label>
      </div>
      <input type="text" id="super-id" value={text} onChange={handleTextChange} />
      <div style={{ border: '1px solid red', height: '20px', color: 'purple' }}>
        {text}
      </div>
    </div>
  );
};

export default TwoWayBindingExample;
