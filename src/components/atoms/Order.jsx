import React from 'react'
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const Order = () => {
    const [order, setOlder] = React.useState('');
    const handleChange = (event) => {
    setOlder(event.target.value);
    };
  return (
    <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label">Ordenar</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={order}
          label="Ordenar"
          onChange={handleChange}
        >
          <MenuItem value={"Apellido"}>Apellido</MenuItem>
          <MenuItem value={"Edad"}>Edad</MenuItem>
          <MenuItem value={"Fecha"}>Fecha</MenuItem>
        </Select>
      </FormControl>
  )
}

export default Order