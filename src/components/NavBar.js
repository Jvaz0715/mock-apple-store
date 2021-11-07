import React from 'react';
import { Box, AppBar, Toolbar } from "@material-ui/core";

function NavBar() {
   return (
      <Box>
         <AppBar 
            position="static"
            style={{
               background:"black"
            }}
         >
            <Toolbar>
               <img
                  src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-what-you-need-know-before-rebranding-11.png"
                  alt="apple logo"
                  width="100px"
                  height="100px"
               />
            </Toolbar>
         </AppBar>
      </Box>
   )
}

export default NavBar;
