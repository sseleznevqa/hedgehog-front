// Header.js
import React from 'react';
import { AppBar, Toolbar, Button, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({ onHomeClick, onAdvertisementCreationWizardClick, onWishlistClick, goToMyAds, goToMyDeals }) => {
  const [menuAnchor, setMenuAnchor] = React.useState(null);

  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  return (
    <AppBar position="sticky" sx={{ top: 0, zIndex: 1000, width: '100vw' }}>
      <Toolbar>
        {/* New Items button */}
        <Button color="inherit" onClick={onHomeClick}>
          New Items
        </Button>

        {/* Wishlist button */}
        <Button color="inherit" onClick={onWishlistClick} >Wishlist</Button>

        {/* Spacer to push the burger menu button to the right */}
        <div style={{ flexGrow: 1 }}></div>

        {/* Burger menu button on the right */}
        <IconButton color="inherit" onClick={handleMenuOpen}>
          <MenuIcon />
        </IconButton>

        {/* More options menu */}
        <Menu anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClick={handleMenuClose}>
          {/* Add more menu items as needed */}
          <MenuItem onClick={onAdvertisementCreationWizardClick}>Add New Ad</MenuItem>
          <MenuItem onClick={goToMyAds}>My Items</MenuItem>
          <MenuItem onClick={goToMyDeals}>My Deals</MenuItem>
          <MenuItem>Account</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Terms and Conditions</MenuItem>
          <MenuItem>Privacy Policy</MenuItem>
          <MenuItem>Logout</MenuItem>
          <MenuItem>Thank you!</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;