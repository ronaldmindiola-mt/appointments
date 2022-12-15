import React from "react";
import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const Filters = () => {
  const [filter, setFilter] = React.useState('');
  const handleChange = (event) => {
    setFilter(event.target.value);
  };
  return (
    <>
      <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label">Filtros</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filter}
          label="Filtros"
          onChange={handleChange}
        >
          <MenuItem value={"Apellido"}>Apellido</MenuItem>
          <MenuItem value={"Edad"}>Edad</MenuItem>
          <MenuItem value={"Fecha"}>Fecha</MenuItem>
        </Select>
      </FormControl>
      
    </>
  );
};

export default Filters;
