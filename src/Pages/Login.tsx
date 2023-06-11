import { Box } from '@chakra-ui/react'
import { LoginUI } from '../Components/UI/Login'
import { FormLoginUI } from '../Components/UI/Login/Form'

export const LoginPage = (): JSX.Element => {
  return <Box gap="32px" display="flex" flexDirection="column" alignItems="center" pb="40px">
    <LoginUI />
    <FormLoginUI />
  </Box>
}
