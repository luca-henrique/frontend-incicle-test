import { Stack } from '@mui/material/'

import ContentCard from 'src/components/molecules/CardEventContent'
import DropdownButtonIcon from 'src/components/molecules/DropdownButtonIcon'

const Card = ({ item }) => {
  return (
    <Stack
      direction="row"
      style={{
        backgroundColor: '#fff',
        boxShadow:
          '0px 5px 17px rgba(243, 243, 243, 0.4283),0px 1.8696px 5px rgba(24, 24, 43, 0.0526),0px 2.0543px 17.7391px rgba(0, 0, 0, 0.0526)',
        padding: '9px 11px',
        width: '100%',
      }}
    >
      <img
        src={item.file.url}
        alt=""
        style={{ width: '73px', height: '73px' }}
      />

      <ContentCard item={item} />

      <DropdownButtonIcon id={item.id} />
    </Stack>
  )
}

export default Card
