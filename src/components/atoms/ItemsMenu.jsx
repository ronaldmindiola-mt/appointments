import React from "react";
import { Link } from "react-router-dom";
import { Button, Box, Stack } from "@mui/material";
import { red } from "@mui/material/colors";

const itemsMenu = () => {
  return (
    <>
      <Stack direction="row" spacing={2} sx={{display:{xs:'none', md:'block'}}} >
        <Button variant="contained" component={Link} to="/">
          Inicio
        </Button>

        <Button variant="contained" component={Link} to="/documentos">
          Documentación
        </Button>

        <Button variant="contained" component={Link} to="/nosotros">
          Quienes Somos?
        </Button>

        <Button variant="contained" component={Link} to="/contacto">
          Contacto
        </Button>
      </Stack>
      <Box
        sx={{
          flexGrow: 0,
          color: red[500],
          display: {
            xs: "none",
            md: "flex",
          },
        }}
      ></Box>
    </>
  );
};

export default itemsMenu;
