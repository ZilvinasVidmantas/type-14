import React from 'react';
import {
  Stack,
  Typography,
  TextField,
  Box,
  InputAdornment,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const ImagesField = () => (
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
);

export default ImagesField;
