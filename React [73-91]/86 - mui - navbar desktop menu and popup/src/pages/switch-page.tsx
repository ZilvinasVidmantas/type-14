import React, { useState } from 'react';
import {
  Box, FormControlLabel, FormControl, FormLabel, FormGroup, FormHelperText, Switch,
} from '@mui/material';

const SwitchPage = () => {
  const [checked, setChecked] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);

  console.log(skills);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value);
    if (index === -1) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  };

  return (
    <Box>
      <Box>
        <FormControlLabel label="Dark Mode" control={<Switch checked={checked} onChange={handleChange} />} />
      </Box>
      <Box>
        <FormControl>
          <FormLabel error>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              control={<Switch value="html" checked={skills.includes('html')} onChange={handleSkillChange} />}
            />
            <FormControlLabel
              label="CSS"
              control={<Switch value="css" checked={skills.includes('css')} onChange={handleSkillChange} />}
            />
            <FormControlLabel
              label="Javascript"
              control={<Switch value="javascript" checked={skills.includes('javascript')} onChange={handleSkillChange} />}
            />
          </FormGroup>
          <FormHelperText error>Invalid selection</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
};

export default SwitchPage;
