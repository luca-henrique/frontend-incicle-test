import { AppBar, Stack, Toolbar } from '@mui/material/'

import { ReactComponent as LogoIcon } from 'src/assets/icons/logo.svg'

export default function NavAppBar() {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      style={{
        backgroundColor: '#FFFFFF',
      }}
    >
      <AppBar
        position="static"
        style={{
          backgroundColor: '#FFFFFF',
          boxShadow: 'none',
          width: '86%',
        }}
      >
        <Toolbar>
          <LogoIcon />
        </Toolbar>
      </AppBar>
    </Stack>
  )
}
