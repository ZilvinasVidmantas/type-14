import React from 'react';
import {
  Box,
  Breadcrumbs,
  Link,
  Typography,
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const BreadcrumbsPage = () => (
  <Box m={2}>
    <Breadcrumbs
      aria-label="breadcrumb"
      separator={(
        <NavigateNextIcon fontSize="small" />
      )}
      maxItems={2}
      itemsBeforeCollapse={2}
    >
      <Link underline="hover" href="https://www.youtube.com/">Home</Link>
      <Link underline="hover" href="https://www.youtube.com/">Catalog</Link>
      <Link underline="hover" href="https://www.youtube.com/">Accessories</Link>
      <Typography color="text.primary">Shoes</Typography>
    </Breadcrumbs>
  </Box>
);

export default BreadcrumbsPage;
