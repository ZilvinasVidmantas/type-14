import React from 'react';
import {
  Stack,
  Typography,
  TextField,
  TextFieldProps,
  Box,
  InputAdornment,
  IconButton,
} from '@mui/material';
import createId from 'uniqid';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const initialIds = [createId()];

type ImagesFieldProps = {
  color: TextFieldProps['color']
  colorMain: string,
  defaultImages?: string[],
};

const ImagesField: React.FC<ImagesFieldProps> = ({ color, colorMain, defaultImages }) => {
  const imgMap = React.useMemo(
    () => defaultImages && defaultImages.reduce<{ [key: string]: string }>((prevMap, img) => ({
      ...prevMap,
      [createId()]: img,
    }), {}),
    [],
  );

  const [
    imgFieldsIds,
    setImgFieldsIds,
  ] = React.useState<string[]>((imgMap && Object.keys(imgMap)) || initialIds);

  const addImgField = () => setImgFieldsIds([...imgFieldsIds, createId()]);
  const removeImgField = (id: string) => {
    if (imgFieldsIds.length > 1) {
      setImgFieldsIds(imgFieldsIds.filter((imgId) => imgId !== id));
    }
  };

  return (
    <Box sx={{ width: 1 }}>
      <Typography component="legend">Images</Typography>
      <Stack sx={{ gap: 2 }}>
        {imgFieldsIds.map((id) => (
          <TextField
            key={id}
            name="images"
            label="Image"
            fullWidth
            variant="filled"
            size="small"
            color={color}
            defaultValue={imgMap && imgMap[id]}
            InputProps={imgFieldsIds.length > 1 ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => removeImgField(id)}>
                    <DeleteIcon color="error" />
                  </IconButton>
                </InputAdornment>
              ),
            } : undefined}
          />
        ))}
      </Stack>
      <IconButton onClick={addImgField}>
        <AddCircleIcon sx={{ fontSize: 38, color: colorMain }} />
      </IconButton>
    </Box>
  );
};

export default ImagesField;
