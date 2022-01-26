import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'

import { ReactComponent as LogoIcon } from '../../../assets/icons/logo.svg'

export default function ButtonAppBar() {
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
