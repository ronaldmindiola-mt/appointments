import React from "react";
import { AppBar, Toolbar } from '@mui/material';

// Components
import ButtonMenu from '../atoms/ButtonMenu';
import Brand from '../atoms/Brand'
import ItemsMenu from '../atoms/ItemsMenu'

// Configurations
import { brand } from '../../config.json'

const NavBar = () => {
  return (
    <>
        <AppBar position='fixed'>
          <Toolbar>
            <ButtonMenu />
            <Brand label={brand.label} path={brand.path} />
            <ItemsMenu  />
          </Toolbar>
        </AppBar>
    </>
  );
};

export default NavBar;
