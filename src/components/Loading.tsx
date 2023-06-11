import { Box } from '@chakra-ui/react'
import { ReactComponent as Logo } from '../assets/airbnb.svg'

export const Loading = (): JSX.Element => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" minH="100vh" minW="100vw">
      <Logo width={61.22} height={65.89} fill='#FF385C'/>
    </Box>
  )
}
