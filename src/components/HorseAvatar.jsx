import * as React from 'react';
import Stack from '@mui/material/Stack';
import { green } from '@mui/material/colors';
import Icon from '@mui/material/Icon';

const HorseAvatar = () => {
  return (
    <Stack direction="row" spacing={4} alignItems="flex-end">
      <Icon baseClassName="fas" className="fa-chess-knight" />
      <Icon baseClassName="fas" className="fa-chess-knight" color="primary" />
      <Icon
        baseClassName="fas"
        className="fa-chess-knight"
        sx={{ color: green[500] }}
      />
      <Icon baseClassName="fas" className="fa-chess-knight" fontSize="small" />
      <Icon baseClassName="fas" className="fa-chess-knight" sx={{ fontSize: 30 }} />
    </Stack>
  );
}

export default HorseAvatar
