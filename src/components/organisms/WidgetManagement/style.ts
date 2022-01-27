import { Stack } from '@mui/material/'
import styled from 'styled-components'

export const ContainerWidget = styled(Stack)`
  width: 278px;

  padding: 28px 20px;

  background-color: #fff2de;
  margin-top: 20px;
  margin-bottom: 20px;
  border: 1px solid #dcd1c0;

  @media (max-width: 800px) {
    width: 100%;
  }
`

export const Title = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;

  color: #707070;

  @media (max-width: 800px) {
    width: 100%;
  }
`

export const Description = styled.h5`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 19px;
  color: #707070;
`
