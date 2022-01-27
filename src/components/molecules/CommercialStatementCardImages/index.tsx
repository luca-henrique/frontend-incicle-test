import { Stack } from '@mui/material'

import { Image } from './style'

const CommercialStatementCard = ({ images }) => {
  return (
    <Stack direction="row" spacing={0.3} style={{ marginTop: '4px' }}>
      {images.map(file => {
        return <Image src={file.file} />
      })}
    </Stack>
  )
}

export default CommercialStatementCard
