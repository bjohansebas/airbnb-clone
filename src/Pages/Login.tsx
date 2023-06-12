import { Box } from '@chakra-ui/react'
import { LoginUI } from '../components/UI/Forms'

export const LoginPage = (): JSX.Element => {
  return <Box gap="32px" display="flex" flexDirection="column" alignItems="center" >
    <LoginUI />
  </Box>
}
