import React from "react";
import { NavLink } from 'react-router-dom';
import { Box, Button } from "@mui/material";
import styled from '@emotion/styled'
const config = require("../../config.json");

const StyledButton = styled(Button)({
  color: "gainsboro",
  display: "block",
  textTransform: "capitalize",
  fontSize: 16,
  '&:hover': {
    backgroundColor: '#000000'
  }
});

const NavItem = () => {
  const { pages } = config;

  return (
    <>
        {/* {pages.map((page) => (

          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <Button sx={{ m: 0 }} variant="text" color="inherit">
              {page.label}
            </Button>
          </Box>
        ))} */}

      <Box
        sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, spacing: 2 }}
      >
        {pages.map((pages) => (
          <StyledButton
            underline="hover"
            component={NavLink}
            key={pages.label}
            to={pages.path}
            sx={{ my: 0, textTransform: "capitalize" }}
          >
            {pages.label}
          </StyledButton>
        ))}
      </Box>
      
    </>
  );
};

export default NavItem;
