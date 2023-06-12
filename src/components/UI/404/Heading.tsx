import { Box, Link } from '@chakra-ui/react'
import { Link as LinkReact } from 'react-router-dom'
import { SiAirbnb } from 'react-icons/si'

export const Heading404 = (): JSX.Element => {
  return <Box width="100%" height="81px" borderBottom="1px solid #B0B0B0" display="flex" alignItems="center" justifyContent="start" px="16px">
    <Link color="brand.S300" as={LinkReact} to="/"><SiAirbnb fontSize={32}/></Link>
  </Box>
}
