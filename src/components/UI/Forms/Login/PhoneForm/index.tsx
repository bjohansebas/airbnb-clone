import { Box, Button, Text } from '@chakra-ui/react'
import { type Dispatch, type SetStateAction, useEffect, useState } from 'react'

import countriesResponse from 'utils/countries.json'
import { type OptionSelectProps, SelectInput } from 'components/inputs/Select'
import { PhoneInput } from 'components/inputs/Phone'
import { useAuth } from '@/hooks/useAuth'

export interface PhoneFormLoginProps {
  setStepLogin: Dispatch<SetStateAction<string>>
}

export const PhoneFormLoginUI = ({ setStepLogin }: PhoneFormLoginProps): JSX.Element => {
  const { hasAccount } = useAuth()
  const [country, setCountry] = useState<string>('')
  const [countries, setCountries] = useState<OptionSelectProps[]>([])

  const [phone, setPhone] = useState<string>('')

  const handleStepLogin = (): void => {
    if (hasAccount) {
      setStepLogin('email')
    } else {
      setStepLogin('signup')
    }
  }

  useEffect(() => {
    const data: OptionSelectProps[] = countriesResponse.map((countryData) => {
      return { name: `${countryData.name} (+${countryData.phone_code})`, value: `${countryData.phone_code}-${countryData.iso2}` }
    })

    setCountries(data)
    setCountry(data[0].value)
  }, [])

  return (
    <Box gap="26px" display="flex" flexDirection="column" alignItems="flex-start">
      <Box display="flex" flexDirection="column" alignItems="flex-start" gap="16px">
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <SelectInput select={country} setSelect={setCountry} label='Country/Region' data={countries} borderRadius="8px 8px 0px 0px" borderWidth="1px 1px 0px 1px" />
          <PhoneInput label='Phone number' phone={phone} country={country} setPhone={setPhone} borderWidth="1px 1px 1px 1px" borderRadius="0px 0px 8px 8px" />
        </Box>
        <Text fontSize={12} width={297}>
          We’ll call or text to confirm your number. Standard message and data rates apply
        </Text>
      </Box>
      <Button size="lg" height={58} width="100%" colorScheme="brandMain" onClick={handleStepLogin} variant="solid">Continue</Button>
    </Box>
  )
}
