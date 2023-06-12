import { Text, Box, type BoxProps, IconButton } from '@chakra-ui/react'
import { type Dispatch, type SetStateAction } from 'react'
import { BsSearch } from 'react-icons/bs'
import { IoMdSwitch } from 'react-icons/io'

export interface SearchProps extends BoxProps {
  labelTitle: string
  labelSubtitle: string
  setOpenSearch: Dispatch<SetStateAction<boolean>>
}

export const SearchInput = ({ labelTitle, labelSubtitle, setOpenSearch, ...styles }: SearchProps): JSX.Element => {
  return (
    <Box
      display="flex" justifyContent="space-between" alignItems="center" gap="28px"
      border="0.5px solid" borderColor="gray.100" borderRadius="999999px"
      w="342px" p="12px 12px 12px 20px" h="60px" {...styles}>
      <Box display="flex" alignItems="center" gap="18px" w="100%">
        <Text color="blacks.black" fontSize={18} >
          <BsSearch />
        </Text>
        <Box w="100%">
          <Text fontWeight={700} fontSize={14} color="ink.normal">{labelTitle}</Text>
          <Text fontSize={12} color="ink.standard">{labelSubtitle}</Text>
        </Box>
      </Box>
      <IconButton icon={<IoMdSwitch/>} aria-label='Filter' size="lg" variant="outline" borderRadius="100%"/>
    </Box>
  )
}
