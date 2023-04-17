import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from './Components/AppBar';
import Toolbar from './Components/Toolbar';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function AppAppBar() {
  return (
    <div id="header-div" className="bg-blue-500">
      <AppBar position="fixed" className="bg-blue-500">
        <Toolbar className="bg-blue-500" sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} className="bg-blue-500"/>
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/"
            sx={{ fontSize: 24 }}
          >
            {'Calculator Emporium'}
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/"
              sx={rightLink}
            >
              {/* {'Sign In'} */}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="/"
              sx={{ ...rightLink, color: 'secondary.main' }}
            >
              {/* {'Sign Up'} */}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;