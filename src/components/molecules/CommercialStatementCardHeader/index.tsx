import { Stack } from '@mui/material'

import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import PublicIcon from '@mui/icons-material/Public'

import { Title, Button } from './style'

const CommercialStatementCard = ({ item }) => {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Title>{item.title}</Title>

      <Stack direction="row" justifyContent="space-between" spacing={1}>
        <Button id="basic-button" size="small">
          <PublicIcon />
        </Button>

        <Button id="basic-button">
          <MoreHorizIcon />
        </Button>
      </Stack>
    </Stack>
  )
}

export default CommercialStatementCard
