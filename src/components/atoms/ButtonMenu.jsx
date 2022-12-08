import React from "react";
import { Box, IconButton } from "@mui/material";

const ButtonMenu = () => {
  return (
    <>
      <Box sx={{ ml: 2 }}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2, display: { md: "none" } }}
        >jjj
        </IconButton>
      </Box>
    </>
  );
};

export default ButtonMenu;
