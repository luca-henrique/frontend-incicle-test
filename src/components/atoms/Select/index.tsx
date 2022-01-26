import Select, { SelectChangeEvent } from '@mui/material/Select'
import { useState } from 'react'

import { MenuItem, FormControl } from '@mui/material/'

const StyledSelect = () => {
  const [age, setAge] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string)
  }

  return (
    <FormControl sx={{ minWidth: 120 }} style={{ backgroundColor: '#fff' }}>
      <Select
        value={age}
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value="">
          <em>TIPO</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  )
}

export default StyledSelect
