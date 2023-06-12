import { List, ListIcon, ListItem, Text } from '@chakra-ui/react'
import { BsChatSquare, BsHeart, BsSearch } from 'react-icons/bs'
import { VscAccount } from 'react-icons/vsc'
import { SiAirbnb } from 'react-icons/si'
import { NavLink } from 'react-router-dom'

export const NavigationMenu = (): JSX.Element => {
  return (
    <nav>
      <List w="390px" display="flex" justifyContent="center" alignItems="center" bg="white" position="fixed" bottom={0} h="64px" borderTop="1px solid" borderColor="gray.100">
        <ListItem as={NavLink}
          sx={{ '&.active': { color: 'brand.S300' } }}
          to="/" display="flex" w="75px" h="100%" flexDirection="column" alignItems="center"
          justifyContent="center" color="ink.standard" gap="4px">
          <ListIcon marginInlineEnd="none" as={BsSearch} fontSize={24} />
          <Text fontSize="10px" fontWeight={500}>Explore</Text>
        </ListItem>
        <ListItem as={NavLink}
          sx={{ '&.active': { color: 'brand.S300' } }}
          to="/wishlists" display="flex" w="75px" h="100%" flexDirection="column" alignItems="center"
          justifyContent="center" color="ink.standard" gap="4px">
          <ListIcon marginInlineEnd="none" as={BsHeart} fontSize={24} />
          <Text fontSize="10px" fontWeight={500}>Wishlists</Text>
        </ListItem>
        <ListItem as={NavLink}
          sx={{ '&.active': { color: 'brand.S300' } }}
          to="/trips" display="flex" w="75px" h="100%" flexDirection="column" alignItems="center"
          justifyContent="center" color="ink.standard" gap="4px">
          <ListIcon marginInlineEnd="none" as={SiAirbnb} fontSize={24} />
          <Text fontSize="10px" fontWeight={500}>Trips</Text>
        </ListItem>
        <ListItem as={NavLink}
          sx={{ '&.active': { color: 'brand.S300' } }}
          to="/inbox" display="flex" w="75px" h="100%" flexDirection="column" alignItems="center"
          justifyContent="center" color="ink.standard" gap="4px">
          <ListIcon marginInlineEnd="none" as={BsChatSquare} fontSize={24} />
          <Text fontSize="10px" fontWeight={500}>Inbox</Text>
        </ListItem>
        <ListItem as={NavLink}
          sx={{ '&.active': { color: 'brand.S300' } }}
          to="/profile" display="flex" w="75px" h="100%" flexDirection="column" alignItems="center"
          justifyContent="center" color="ink.standard" gap="4px">
          <ListIcon marginInlineEnd="none" as={VscAccount} fontSize={24} />
          <Text fontSize="10px" fontWeight={500}>Profile</Text>
        </ListItem>
      </List>
    </nav>
  )
}
