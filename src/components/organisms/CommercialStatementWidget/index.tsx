import { Stack } from '@mui/material'

import images from 'src/constants/management.json'

import CommercialStatementCard from 'src/components/molecules/CommercialStatementCard'

const Index = () => {
  const { boards } = images.data[0]
  return (
    <Stack spacing={1} style={{ marginTop: '6px' }}>
      {boards.map(item => {
        return <CommercialStatementCard item={item} />
      })}
    </Stack>
  )
}

export default Index
