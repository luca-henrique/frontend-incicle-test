import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'

import TableInvitedPeople from 'src/components/molecules/EventModalTableInvitedPeople'

import { Container } from './style'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
}

export default function BasicModal({ open, setOpen, peopleInvited }) {
  const handleClose = () => setOpen(false)
  return (
    <Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TableInvitedPeople peopleInvited={peopleInvited} />
        </Box>
      </Modal>
    </Container>
  )
}
