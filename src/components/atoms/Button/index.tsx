import { ButtonProps } from '@mui/material'
import { StyledButton } from './style'

interface ButtonPropsInterface extends ButtonProps {
  EndIcon?: React.ElementType
  StartIcon?: React.ElementType
}

const ContainerButton = ({
  EndIcon,
  StartIcon,
  children,
}: ButtonPropsInterface) => {
  return (
    <StyledButton
      variant="contained"
      startIcon={StartIcon && <StartIcon />}
      endIcon={EndIcon && <EndIcon />}
      size="small"
      disableElevation
    >
      {children}
    </StyledButton>
  )
}

ContainerButton.defaultProps = {
  EndIcon: null,
  StartIcon: null,
}

export default ContainerButton
