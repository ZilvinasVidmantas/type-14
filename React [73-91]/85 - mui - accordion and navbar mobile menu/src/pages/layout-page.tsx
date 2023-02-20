import {
  Box, Stack, Divider, Grid, Paper,
} from '@mui/material';
import React from 'react';

const BoxPage = () => (
  <Paper sx={{ padding: '32px' }} elevation={4}>
    <Stack
      sx={{ border: '1px solid' }}
      direction="row"
      spacing={2}
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Box
        sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          height: '100px',
          width: '100px',
          padding: '16px',
          '&:hover': {
            backgroundColor: 'primary.light',
          },
        }}
      >
        BoxPage
      </Box>
      <Box
        display="flex"
        height="100px"
        width="100px"
        bgcolor="success.light"
        p={2}
      />
    </Stack>
    <Grid container my={4} rowSpacing={2} columnSpacing={1}>
      <Grid item xs={12} sm={6}>
        <Box bgcolor="primary.light" p={2}>item 1</Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box bgcolor="primary.light" p={2}>item 2</Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box bgcolor="primary.light" p={2}>item 3</Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box bgcolor="primary.light" p={2}>item 4</Box>
      </Grid>
    </Grid>
    <Grid container my={4} spacing={2}>
      <Grid item xs="auto">
        <Box bgcolor="primary.light" p={2}>item 1</Box>
      </Grid>
      <Grid item xs={6}>
        <Box bgcolor="primary.light" p={2}>item 2</Box>
      </Grid>
      <Grid item xs>
        <Box bgcolor="primary.light" p={2}>item 3</Box>
      </Grid>
      <Grid item xs>
        <Box bgcolor="primary.light" p={2}>item 4</Box>
      </Grid>
    </Grid>
  </Paper>
);

export default BoxPage;
