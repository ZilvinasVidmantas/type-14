import React from 'react';
import Section from '../components/ui/section';
import TextField from '../components/ui/text-field';
import classes from './color-manager-page.module.scss';

const ColorManagerPage = () => {
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

export default ColorManagerPage;
