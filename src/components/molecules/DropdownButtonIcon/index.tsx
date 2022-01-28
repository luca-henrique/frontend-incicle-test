import * as React from 'react'

import { Stack, Menu, MenuItem } from '@mui/material/'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { useEvent } from 'src/providers/events.js'
import { Button } from './style'

/*
  Ao clicar no botão "more" de cada item, 
  deve aparecer a opção de "Excluir item", 
  ao clicar no botão, o item deve sumir. 
  A mesma funcionalidade deve ocorrer nos quadros de gestão à vista;
*/

const DropdownButton = ({ id }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const { removeEvent } = useEvent()

  const handleClickDeletEvent = () => {
    removeEvent(id)
    handleClose()
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
        <MenuItem onClick={handleClickDeletEvent}>Excluir</MenuItem>
      </Menu>
    </Stack>
  )
}

export default DropdownButton
