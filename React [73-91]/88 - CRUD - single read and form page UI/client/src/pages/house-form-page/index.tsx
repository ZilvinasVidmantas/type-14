import React from 'react';
import {
  Stack,
  Typography,
  TextField,
  Paper,
  Box,
  InputAdornment,
  IconButton,
  Button,
  Rating,
} from '@mui/material';
import HouseIcon from '@mui/icons-material/House';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const HouseFormPage = () => (
  <Stack sx={{
    py: { xs: 2, md: 6, xl: 10 },
    px: 2,
    alignItems: 'center',
  }}
  >
    <Paper
      component="form"
      elevation={6}
      sx={{ p: 3, width: (theme) => ({ xs: 1, sm: theme.breakpoints.values.sm }) }}
    >
      <Stack sx={{ gap: 2, alignItems: 'center' }}>
        <HouseIcon sx={{ fontSize: 60, color: 'primary.main' }} />
        <Typography variant="h4" color="primary">Create new location</Typography>
        <TextField
          label="Title"
          fullWidth
          variant="filled"
          size="small"
        />
        <Box sx={{ display: 'flex', width: 1, gap: 2 }}>
          <TextField
            label="Country"
            fullWidth
            variant="filled"
            size="small"
          />
          <TextField
            label="City"
            fullWidth
            variant="filled"
            size="small"
          />
        </Box>
        <TextField
          label="Price"
          type="number"
          inputProps={{ step: '0.01' }}
          fullWidth
          variant="filled"
          size="small"
        />
        <Box sx={{ width: 1 }}>
          <Typography component="legend">Images</Typography>
          <Stack sx={{ gap: 2 }}>
            <TextField
              label="Image"
              fullWidth
              variant="filled"
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <DeleteIcon color="error" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Image"
              fullWidth
              variant="filled"
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <DeleteIcon color="error" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
          <IconButton>
            <AddCircleIcon sx={{ fontSize: 38, color: 'primary.main' }} />
          </IconButton>
        </Box>

        <Box sx={{ alignSelf: 'flex-start' }}>
          <Typography component="legend">Rating</Typography>
          <Rating />
        </Box>
        <Button variant="contained" color="primary" size="large" fullWidth>Create</Button>
      </Stack>
    </Paper>

  </Stack>
);

export default HouseFormPage;
