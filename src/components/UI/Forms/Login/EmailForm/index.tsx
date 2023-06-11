import { Box, Button } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import { EmailInput } from 'components/inputs/Email'
import { EMAIL_REGEX } from 'utils/regex'

export const EmailFormLoginUI = (): JSX.Element => {
  const [email, setEmail] = useState<string>('')
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false)

  useEffect(() => {
    setIsValidEmail(EMAIL_REGEX.test(email))
  }, [email])

  return (
    <Box gap="41px" display="flex" flexDirection="column" alignItems="flex-start">
      <EmailInput label='Email' email={email} setEmail={setEmail} borderRadius="8px" />
      <Button size="lg" height={58} width="100%" isDisabled={!isValidEmail} colorScheme="brandMain" variant="solid">Continue</Button>
    </Box>
  )
}
