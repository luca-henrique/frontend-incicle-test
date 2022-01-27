import { Stack } from '@mui/material/'
import styled from 'styled-components'

export const NavContainer = styled(Stack)`
  width: 80%;
  padding: 0 8px;

  @media (max-width: 800px) {
    width: 100%;
  }
`
