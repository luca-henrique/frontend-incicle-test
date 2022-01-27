import { AppBar, Box, Toolbar } from '@mui/material/'

import { ReactComponent as LogoIcon } from 'src/assets/icons/logo.svg'

export default function NavAppBar() {
  return (
    <Box>
      <AppBar
        position="static"
        style={{
          backgroundColor: '#FFFFFF',
          boxShadow: 'none',
        }}
      >
        <Toolbar>
          <LogoIcon />
        </Toolbar>
      </AppBar>
    </Box>
  )
}
