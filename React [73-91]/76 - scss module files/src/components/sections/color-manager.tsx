import React from 'react';
import Section from '../ui/section';
import classes from './color-manager.module.scss';
import TextField from '../ui/text-field';

const ColorManager = () => {
  const [color, setColor] = React.useState<string>('#000000');
  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };

  return (
    <Section title="Color Manager">
      <TextField
        type="color"
        label="Choose color"
        value={color}
        onChange={handleColorChange}
      />
      <div className={[classes.square, classes.mt].join(' ')} style={{ background: color }} />
    </Section>
  );
};

export default ColorManager;
