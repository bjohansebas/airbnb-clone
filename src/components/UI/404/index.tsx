import { Box, Heading, Image, List, ListItem, Text } from '@chakra-ui/react'
import { Heading404 } from './Heading'
import NotFoundGif from 'assets/404.gif'
import { Link } from 'react-router-dom'

export const NotFoundUI = (): JSX.Element => {
  return <>
    <Heading404 />
    <Box px="24px" gap="32px" display="flex" flexDirection="column"alignItems="center">
      <Heading fontSize={26} color="ink.normal">We can’t seem to find the page you’re looking for</Heading>
      <Box gap="16px" display="flex" flexDirection="column" fontSize="16px">
        <Text>Here are some helpful links instead:</Text>
        <List w="390px" display="flex" bg="white">
          <ListItem as={Link} to="/" textDecoration="underline" color="ink.normal">
            <Text fontWeight={600}>Home</Text>
          </ListItem>
        </List>
      </Box>
      <Image width={240} height={240} objectFit="contain" src={NotFoundGif}></Image>
    </Box>
  </>
}
