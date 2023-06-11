import { FormControl, type FormControlProps, Input, FormLabel, Text, InputGroup, InputRightAddon } from '@chakra-ui/react'
import { type Dispatch, type SetStateAction } from 'react'

export interface PhoneProps extends FormControlProps {
  label: string
  phone: string
  setPhone: Dispatch<SetStateAction<string>>
  country: string
}

export const PhoneInput = ({ label, country, phone, setPhone, ...styles }: PhoneProps): JSX.Element => {
  return (
    <FormControl position="relative" border="1px solid" borderColor="gray.300" {...styles} height="59px" label={label}>
      <FormLabel position="absolute" marginBottom="none" marginInlineEnd="none" top="2px" >
        <Text fontSize={16} color="ink.standard" transform="scale(0.75)">
          {label}
        </Text>
      </FormLabel>
      <InputGroup>
        <InputRightAddon fontSize={16} p="0" pl="12px" pt="27px" bg="transparent" border="none" >
          <Text color="ink.standard">
            +{country.substring(0, country.length - 3)}
            </Text>
        </InputRightAddon>
        <Input
          border="none"
          fontSize={16}
          h="57px"
          outline="none"
          pt={2}
          pl="6px"
          fontWeight={500}
          color="ink.normal"
          _focusVisible={{
            border: 'none'
          }}
          w="100%"
          value={phone}
          onChange={(e) => { setPhone(e.target.value) }}
          type='tel'
          inputMode='tel' />
      </InputGroup>
    </FormControl>
  )
}
