import React from 'react';

const FullnameManager = () => {
  const [name, setName] = React.useState('');
  const [surname, setSurname] = React.useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setName(value);
  };

  const handleSurnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSurname(value);
  };

  const fullname = `${name} ${surname}`;
  return (
    <div>
      <h2>Fullname manager</h2>
      <div>
        <div>
          <label htmlFor="super-id">Vardas</label>
        </div>
        <input type="text" id="super-id" value={name} onChange={handleNameChange} />
      </div>

      <div>
        <div>
          <label htmlFor="super-id2">Pavardė</label>
        </div>
        <input type="text" id="super-id2" value={surname} onChange={handleSurnameChange} />
      </div>

      <h4 style={{ height: 40, border: '1px solid black', margin: '1rem' }}>{fullname}</h4>

    </div>
  );
};

export default FullnameManager;
