import React from 'react';
import {
  Typography,
  Container,
  Link,
  Stack,
} from '@mui/material';

const HomePage = () => (
  <Container sx={{ my: 6 }}>
    <Typography variant="h2" component="h1" sx={{ textAlign: 'center', mb: 2 }}>
      MUI library learning project
    </Typography>
    <Stack sx={{ gap: 1 }}>
      <Link href="https://mui.com/material-ui/customization/default-theme/" target="_blank">
        Default Theme
      </Link>
      <Link href="https://mui.com/system/getting-started/the-sx-prop/" target="_blank">
        sx prop and it`s features
      </Link>
    </Stack>
  </Container>
);

export default HomePage;
