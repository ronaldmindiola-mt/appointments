import { Box } from "@mui/material";
import React from "react";

const Filters = () => {
  return (
    <>
      <Box
        sx={{
          p: 1
        }}
      >
        <form id="form">
          <div class="container">
            <div class="row">
              <label for="select">Ordenar por </label>

              <select name="select" id="select">
                <option value="2">Apellido</option>
                <option value="2">Edad</option>
                <option value="2">Fecha</option>
              </select>
            </div>
          </div>
        </form>
      </Box>
    </>
  );
};

export default Filters;
