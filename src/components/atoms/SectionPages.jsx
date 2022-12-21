import { Box, Typography } from '@mui/material';
import React from 'react';

const SectionPages = (props) => {
  return (
    <>
      <Box
        p={1}
      >
        <Typography color="initial">
          {props.section}
        </Typography>
        
      </Box>
    </>
  );
};

export default SectionPages;
