import { Box, flexbox } from '@mui/system';
import logo from '../../logo1.png';
import { useState } from 'react';

export default function HomePage() {

  return (
    <Box
      display='flex'
      alignItems='baseline'
      justifyContent='left'
      flexDirection={'column'}
    >
      <div style={{alignContent: 'left'}}>
        <h1>Welcome to the Homepage</h1>
        <h2>Groups:</h2>

      </div>
      
    </Box>
  );
}
