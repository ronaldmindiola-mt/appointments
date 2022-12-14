import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";

const Loading = () => {
  return (
    <>
      <Container>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            p: 1,
            m: 1,
          }}
        >
          <CircularProgress />
        </Box>
      </Container>
    </>
  );
};

export default Loading;
