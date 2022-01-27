import * as React from 'react'

import { IconButton, Stack } from '@mui/material/'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

const Button = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Stack justifyContent="center" style={{ marginRight: '4px' }}>
      <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreHorizIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Excluir</MenuItem>
      </Menu>
    </Stack>
  )
}

export default Button
