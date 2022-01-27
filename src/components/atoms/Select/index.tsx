import Select, { SelectChangeEvent } from '@mui/material/Select'

import { MenuItem, FormControl } from '@mui/material/'

interface Option {
  value: string
  label: string
}

interface Options {
  options: Array<Option>
  value: string
  setValue: (value: string) => void
  fullWidth?: boolean
}

const StyledSelect = ({ options, value, setValue, fullWidth }: Options) => {
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string)
  }

  return (
    <FormControl
      sx={{ width: fullWidth ? '100%' : '95px', height: '38px' }}
      style={{ backgroundColor: '#fff' }}
    >
      <Select
        value={value}
        onChange={handleChange}
        displayEmpty
        fullWidth
        inputProps={{ 'aria-label': 'Without label' }}
        size="small"
      >
        <MenuItem value="">
          <em>Tipo</em>
        </MenuItem>
        {options.map(option => {
          return <MenuItem value={option.value}>{option.label}</MenuItem>
        })}
      </Select>
    </FormControl>
  )
}

StyledSelect.defaultProps = {
  fullWidth: false,
}

export default StyledSelect
