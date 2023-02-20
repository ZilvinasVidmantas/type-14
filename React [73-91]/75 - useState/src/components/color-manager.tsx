import React from 'react';
import classes from './color-manager.module.scss';

const ColorManager = () => {
  const [color, setColor] = React.useState<string>('#000000');
  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };

  return (
    <div>
      <h2>Color Manager</h2>
      <div>
        <div>
          <label htmlFor="super-id">Choose color</label>
        </div>
        <input type="color" id="super-id" value={color} onChange={handleColorChange} />
      </div>
      <div className={[classes.square, classes.mt].join(' ')} style={{ background: color }} />
    </div>
  );
};

export default ColorManager;
