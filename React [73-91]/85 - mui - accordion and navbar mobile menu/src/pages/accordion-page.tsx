import React, { useState } from 'react';
import {
  Accordion, AccordionSummary, AccordionDetails, Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionPage = () => {
  const [expanden, setExpanden] = useState<string | false>(false);

  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanden(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanden === 'panel1'}
        onChange={(event, isExpanded) => handleChange(isExpanded, 'panel1')}
      >
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-control"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 1</Typography>

        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Mollitia voluptates quasi ut commodi
            libero quo quis atque harum facere recusandae.
            Reiciendis corporis velit nesciunt minima eaque,
            similique consequuntur debitis ad.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanden === 'panel2'}
        onChange={(event, isExpanded) => handleChange(isExpanded, 'panel2')}
      >
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-control"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 2</Typography>

        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Mollitia voluptates quasi ut commodi
            libero quo quis atque harum facere recusandae.
            Reiciendis corporis velit nesciunt minima eaque,
            similique consequuntur debitis ad.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanden === 'panel3'}
        onChange={(event, isExpanded) => handleChange(isExpanded, 'panel3')}
      >
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-control"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 3</Typography>

        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Mollitia voluptates quasi ut commodi
            libero quo quis atque harum facere recusandae.
            Reiciendis corporis velit nesciunt minima eaque,
            similique consequuntur debitis ad.
          </Typography>
        </AccordionDetails>

      </Accordion>
    </div>
  );
};

export default AccordionPage;
