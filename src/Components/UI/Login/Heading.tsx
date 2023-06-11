import { Box, Heading } from '@chakra-ui/react'

export const HeadingLogin = (): JSX.Element => {
  return <Box width="100%" height={59} borderBottom="1px solid #B0B0B0" display="flex" alignItems="center" justifyContent="center">
    <Heading color='ink.normal' fontWeight={800} fontSize={17}>Log in or sign up</Heading>
  </Box>
}
