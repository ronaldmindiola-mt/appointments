import React from "react";
import { Box, Typography } from "@mui/material";

// sx={{ bgcolor:'#888', flexGrow: { xs:0, md:1},  mr: 0, display: { xs: "flex" } }}

const Brand = (props) => {
  return (
    <>
        <Box 
          sx={{ 
            flexGrow: { xs:0, md:1},
            mx: {xs:"auto"}
          }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href={'/'}
            sx={{
              mr: 2,
              fontWeight: 700,
              fontStyle: "italic",
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {props.label}
          </Typography>
        </Box>
    </>
  );
};

export default Brand;
