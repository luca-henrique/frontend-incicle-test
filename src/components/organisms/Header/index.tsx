import { useState } from 'react'

import {
  Stack,
  Button,
  MenuItem,
  FormControl,
  Typography,
} from '@mui/material/'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { Delete } from '@mui/icons-material/'

import StyledSelect from 'src/components/atoms/Select'

const Header = () => {
  const [age, setAge] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string)
  }

  return (
    <Stack direction="row" justifyContent="space-between">
      <Typography
        variant="h1"
        style={{ fontWeight: 300, fontSize: '36px', color: '#707070' }}
      >
        Endomarketing
      </Typography>
      <Stack direction="row">
        <StyledSelect />
        <Button variant="contained" endIcon={<Delete />}>
          criar
        </Button>
      </Stack>
    </Stack>
  )
}

export default Header
