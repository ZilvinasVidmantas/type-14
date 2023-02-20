import React from 'react';
import { Stack, Link, Typography } from '@mui/material';

const LinkPage = () => (
  <Stack spacing={2} direction="row" m={4}>
    <Link href="https://www.youtube.com/" variant="body2">
      Link
    </Link>
    <Typography variant="h6">
      <Link href="https://www.youtube.com/" color="secondary" underline="hover">
        Secondary
      </Link>
    </Typography>
  </Stack>
);

export default LinkPage;
