import React from 'react';
import {
  Box, Card, CardContent, Typography, CardActions, Button, CardMedia,
} from '@mui/material';

const CardPage = () => (
  <Box p="20px">
    <Box width="300px">
      <Card>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/random"
          alt="unsplash image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laborum, laudantium consequatur quo maiores, ab ut eum porro.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn more</Button>
        </CardActions>
      </Card>
    </Box>
  </Box>
);

export default CardPage;
