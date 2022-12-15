import * as React from "react";
import { Card, Grid } from "@mui/material";
import Search from "../atoms/Search";
import Filters from "../atoms/Filters";

const BarTools = () => {
  return (
    <>
      <Card sx={{ p: 1, mb: 1 }} variant="outlined">
        <Grid container spacing={2}>
          <Grid item xs={6} md={3}>
            <Search />
          </Grid>
          <Grid item xs={6} md={3}>
            <Filters />
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default BarTools;
