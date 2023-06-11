import { DateInput } from '@/components/inputs/Date'
import { EmailInput } from '@/components/inputs/Email'
import { NameInput } from '@/components/inputs/Name'
import { PasswordInput } from '@/components/inputs/Password'
import { Box, Button, Checkbox, Link, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { Link as LinkReact } from 'react-router-dom'

export const SingUpFormUI = (): JSX.Element => {
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [date, setDate] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return <>
    <Box display="flex" flexDirection="column" alignItems="flex-start" gap="24px">
      <Box display="flex" flexDirection="column" alignItems="flex-start" gap="8px">
        <Box display="flex" flexDirection="column" alignItems="flex-start" w="100%">
          <NameInput label='First name' name={firstName} setName={setFirstName} borderRadius="8px 8px 0px 0px" borderWidth="1px 1px 0px 1px" />
          <NameInput label="Last name" name={lastName} setName={setLastName} borderWidth="1px 1px 1px 1px" borderRadius="0px 0px 8px 8px" />
        </Box>
        <Text fontSize={12} width={342} color="ink.standard">Make sure it matches the name on your government ID.</Text>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="flex-start" gap="8px">
        <Box display="flex" flexDirection="column" alignItems="flex-start" w="100%">
          <DateInput label='Birthday (mm/dd/yyyy)' date={date} setDate={setDate} borderRadius="8px" />
        </Box>
        <Text fontSize={12} width={342} color="ink.standard">To sign up, you need to be at least 18. Your birthday won’t be shared with other people who use Airbnb.</Text>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="flex-start" gap="8px">
        <Box display="flex" flexDirection="column" alignItems="flex-start" w="100%">
          <EmailInput label="Email" email={email} setEmail={setEmail} borderRadius="8px" />
        </Box>
        <Text fontSize={12} width={342} color="ink.standard">We’ll email you trip confirmations and reciepts</Text>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="flex-start" gap="8px" w="100%">
          <PasswordInput label="Password" password={password} setPassword={setPassword} borderRadius="8px" />
      </Box>
    </Box>
    <Box gap="32px" display="flex" flexDirection="column">
      <Text fontSize="14px" fontWeight={500}>
        By Selecting Agree and continue, I agree to Airbnb’s <Link color="brand.L300" fontWeight={600} as={LinkReact} to="/">
          Terms of Service, Payments Terms of Service
        </Link> and <Link color="brand.L300" fontWeight={600} as={LinkReact} to="/">
          Nondiscrimination Policy
        </Link> and acknowledge the <Link color="brand.L300" fontWeight={600} as={LinkReact} to="/">
          Privacy Policy
        </Link>
      </Text>
      <Button size="lg" height={58} width="100%" colorScheme="brandMain" variant="solid">Agree and continue</Button>
    </Box>
    <Box gap="32px" display="flex" flexDirection="column">
      <Text fontSize="12px" fontWeight={500}>
        Airbnb will send you members-only deals, inspiration, marketing emails, and push notifications. You can opt out of receiving these at any time in your account settings or directly from the marketing notification
      </Text>
      <Checkbox defaultChecked >
        <Text fontSize="12px">
          I dont’ want to receive marketing messaages from Airbnb
        </Text>
      </Checkbox>
    </Box>
  </>
}
