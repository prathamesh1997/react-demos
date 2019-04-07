import React from 'react';
import { AppBar, Toolbar,Typography, Button } from '@material-ui/core';
import { MenuIcon } from '@material-ui/icons/'
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  grow: {
    flexGrow: 1,
  }
}

function NavBar(props) {
    console.log(withStyles(styles))
 const {classes }= props;
  return (
    <div 
     className={classes.root}
    >
      <AppBar position="static">
        <Toolbar>
          <IconButton 
           className={classes.menuButton}
           color="inherit" aria-label="Menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" color="inherit" 
           className={classes.grow}
          >
            Order Management
          </Typography>
          <Button color="inherit">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
NavBar.prototypes = {
  classes: PropTypes.object.isRequired,
};

 export default withStyles(styles)(NavBar)