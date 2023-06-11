import { Box, Button, Text } from '@chakra-ui/react'
import { MdFacebook, MdEmail } from 'react-icons/md'
import { BsApple, BsGoogle } from 'react-icons/bs'

export const SocialConnect = (): JSX.Element => {
  return <Box display="flex" flexDirection="column" alignItems="center" gap="40px">
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
}
