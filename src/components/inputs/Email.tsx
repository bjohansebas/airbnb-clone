import { FormControl, type FormControlProps, Input, FormLabel, Text } from '@chakra-ui/react'
import { type Dispatch, type SetStateAction } from 'react'

export interface EmailProps extends FormControlProps {
  label: string
  email: string
  setEmail: Dispatch<SetStateAction<string>>
}

export const EmailInput = ({ label, email, setEmail, ...styles }: EmailProps): JSX.Element => {
  return (
    <FormControl w="100%" position="relative" border="1px solid" borderColor="gray.300" {...styles} height="59px" label={label}>
      <FormLabel position="absolute" marginBottom="none" marginInlineEnd="none" top="2px" >
        <Text fontSize={16} color="ink.standard" transform="scale(0.75)">
          {label}
        </Text>
      </FormLabel>
      <Input
        border="none"
        fontSize={16}
        h="57px"
        outline="none"
        pt={2}
        pl="6px"
        fontWeight={500}
        color="ink.normal"
        w="100%"
        _focusVisible={{
          border: 'none'
        }}
        value={email}
        onChange={(e) => { setEmail(e.target.value) }}
        type='email'
        inputMode='email' />
    </FormControl>
  )
}
