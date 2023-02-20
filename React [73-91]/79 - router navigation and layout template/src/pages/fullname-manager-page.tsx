import React from 'react';
import Section from '../components/ui/section';
import TextField from '../components/ui/text-field';

const FullnameManagerPage = () => {
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
    <Section title="Fullname manage">
      <TextField label="Name" value={name} onChange={handleNameChange} />
      <TextField label="Surname" value={surname} onChange={handleSurnameChange} />

      <h4 style={{ height: 40, border: '1px solid black', margin: '1rem' }}>{fullname}</h4>

    </Section>
  );
};

export default FullnameManagerPage;
