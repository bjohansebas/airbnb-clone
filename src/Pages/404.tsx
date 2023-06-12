import { Box } from '@chakra-ui/react'
import { NotFoundUI } from '@/components/UI/404'

export const NotFoundPage = (): JSX.Element => {
  return <Box gap="32px" display="flex" flexDirection="column" alignItems="center" >
    <NotFoundUI />
  </Box>
}
