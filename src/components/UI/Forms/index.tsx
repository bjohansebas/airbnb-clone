import { HeadingLogin } from './Login/Heading'

import { PhoneFormLoginUI } from './Login/PhoneForm'
import { EmailFormLoginUI } from './Login/EmailForm'
import { useState } from 'react'
import { SocialConnect } from './Login/SocialConnect'
import { Box } from '@chakra-ui/react'
import { HeadingSignUp } from './SignUp/Heading'
import { SingUpFormUI } from './SignUp'

export const LoginUI = (): JSX.Element => {
  const [stepLogin, setStepLogin] = useState<string>('phone')

  return (
    <>
      {stepLogin !== 'signup' && <HeadingLogin />}
      {stepLogin === 'signup' && <HeadingSignUp />}
      <Box display="flex" flexDirection="column" width={342} gap="32px">
        {stepLogin === 'phone' && <PhoneFormLoginUI setStepLogin={setStepLogin} />}
        {stepLogin === 'email' && <EmailFormLoginUI />}
        {stepLogin === 'signup' && <SingUpFormUI/>}
        {(stepLogin === 'email' || stepLogin === 'phone') && <SocialConnect />}
      </Box>
    </>
  )
}
