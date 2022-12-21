import * as React from "react";
import { Button, Card, Grid } from "@mui/material";
import { FaPlus } from "react-icons/fa";
import Search from "../atoms/Search";
import Filters from "../atoms/Filters";
import Order from "../atoms/Order";
import { Link } from "react-router-dom";

const BarTools = (props) => {
  return (
    <>
      <Card sx={{ p: 1, mb: 1 }} variant="outlined">
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Search />
          </Grid>

          <Grid item xs={6} md={2}>
            <Order />
          </Grid>

          <Grid item xs={6} md={2}>
            <Filters />
          </Grid>

          <Grid item xs={6} md={3}>
            <Link to={"/agendas/"}>
              <Button variant="contained" endIcon={<FaPlus />}>
                Nuevo {props.section}
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default BarTools;
