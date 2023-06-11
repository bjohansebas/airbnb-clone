import { Box, Button, Text } from '@chakra-ui/react'
import { MdFacebook, MdEmail } from 'react-icons/md'
import { BsApple, BsGoogle } from 'react-icons/bs'

import countriesResponse from '../../../utils/countries.json'
import { type OptionSelectProps, SelectInput } from '../../Inputs/Select'
import { useEffect, useState } from 'react'
import { PhoneInput } from '../../Inputs/Phone'

export const FormLoginUI = (): JSX.Element => {
  const [country, setCountry] = useState<string>('')
  const [countries, setCountries] = useState<OptionSelectProps[]>([])

  const [phone, setPhone] = useState<string>('')

  useEffect(() => {
    const data: OptionSelectProps[] = countriesResponse.map((countryData) => {
      return { name: `${countryData.name} (+${countryData.phone_code})`, value: `${countryData.phone_code}-${countryData.iso2}` }
    })

    setCountries(data)
    setCountry(data[0].value)
  }, [])

  return (
    <Box display="flex" flexDirection="column" width={342} gap="32px">
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
        <Button size="lg" height={58} width="100%" colorScheme="brandMain" variant="solid">Continue</Button>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" gap="40px">
        <Box display="flex" gap="8px" alignItems="center" justifyContent="center">
          <Box width={154} height="1px" background="gray.100"></Box>
          <Text fontSize={16} fontWeight={800} color="ink.standard">or</Text>
          <Box width={154} height="1px" background="gray.100"></Box>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center" gap="16px" width="100%">
          <Button leftIcon={<MdEmail size={20} />} size="lg" color="gray.500" borderColor="blacks.blackish" fontSize="16px" fontWeight="700" width="100%" variant="outline">
            <Text width="100%" color="ink.normal">Continue with Email</Text>
          </Button>
          <Button leftIcon={<BsApple size={20} />} size="lg" color="gray.500" borderColor="blacks.blackish" fontSize="16px" fontWeight="700" width="100%" variant="outline">
            <Text width="100%" color="ink.normal">Continue with Apple</Text>
          </Button>
          <Button leftIcon={<BsGoogle size={20} />} size="lg" color="gray.500" borderColor="blacks.blackish" fontSize="16px" fontWeight="700" width="100%" variant="outline">
            <Text width="100%" color="ink.normal">Continue with Google</Text>
          </Button>
          <Button leftIcon={<MdFacebook size={20} />} size="lg" color="gray.500" borderColor="blacks.blackish" fontSize="16px" fontWeight="700" width="100%" variant="outline">
            <Text width="100%" color="ink.normal">Continue with Facebook</Text>
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
