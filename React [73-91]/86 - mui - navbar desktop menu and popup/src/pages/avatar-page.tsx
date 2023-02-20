import React from 'react';
import { Stack, Avatar, AvatarGroup } from '@mui/material';

const AvatarPage = () => (
  <Stack spacing={4}>
    <Stack direction="row" spacing={1}>
      <Avatar sx={{ bgcolor: 'primary.light' }}>
        BW
      </Avatar>
      <Avatar sx={{ bgcolor: 'success.light' }}>
        CK
      </Avatar>
    </Stack>
    <Stack direction="row" spacing={1}>
      <AvatarGroup max={3}>
        <Avatar sx={{ bgcolor: 'primary.light' }}>
          BW
        </Avatar>
        <Avatar sx={{ bgcolor: 'success.light' }}>
          CK
        </Avatar>
        <Avatar src="https://randomuser.me/api/portraits/men/39.jpg" alt="Janes Diaz" />
        <Avatar src="https://randomuser.me/api/portraits/men/91.jpg" alt="Janes Diaz" />
      </AvatarGroup>
    </Stack>
    <Stack direction="row" spacing={1}>
      <Avatar variant="square" sx={{ bgcolor: 'primary.light', width: 48, height: 48 }}>
        BW
      </Avatar>
      <Avatar variant="rounded" sx={{ bgcolor: 'success.light', width: 48, height: 48 }}>
        CK
      </Avatar>
    </Stack>
  </Stack>
);

export default AvatarPage;
