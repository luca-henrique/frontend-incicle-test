import * as React from 'react'

import { Stack, Menu, MenuItem } from '@mui/material/'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { Button } from './style'

const DropdownButton = () => {
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
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{ background: '#DBDBDB' }}
        size="small"
      >
        <MoreHorizIcon />
      </Button>
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

export default DropdownButton
