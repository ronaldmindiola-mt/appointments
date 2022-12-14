import React from 'react';
import { Link } from "react-router-dom";
import { Menu, IconButton, MenuItem } from "@mui/material";
import { MdMenu } from "react-icons/md";

export default function ButtonMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton sx={{ display: { sx:'flex', md:'none'}}} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} variant="text" color="inherit">
        <MdMenu/>
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} component={Link} to="/pacientes">
          Pacientes
        </MenuItem>

        <MenuItem onClick={handleClose} component={Link} to="/agendas">
          Agendas
        </MenuItem>

        <MenuItem onClick={handleClose} component={Link} to="/citas">
          Citas
        </MenuItem>
        
      </Menu>
    </div>
  );
}
