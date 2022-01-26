import { Stack } from '@mui/material/'

import Header from '../Header'
import ListCards from '../ListCards'

export default function BodyPage() {
  return (
    <Stack direction="row" justifyContent="center">
      <Stack style={{ width: '80%', marginTop: '40px' }}>
        <Header />
        <ListCards />
      </Stack>
    </Stack>
  )
}
