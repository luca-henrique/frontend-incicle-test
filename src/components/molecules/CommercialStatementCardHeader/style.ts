import { IconButton, Stack } from '@mui/material'
import styled from 'styled-components'

export const Container = styled(Stack)`
  background: rgba(52, 137, 177, 0.1);
  padding: 6px 3px;
`

export const Title = styled.h4`
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  color: #707070;
`

export const Button = styled(IconButton)`
  background: #ffffff;
  width: 16px;
  height: 16px;
  padding: 2px;
`
