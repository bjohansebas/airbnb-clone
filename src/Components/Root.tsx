import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

export const Root = (): JSX.Element => {
  return (
    <Box width="100vw" height="100wh" justifyContent="center" alignItems="center" display="flex" background="#ffff">
      <Box width={390}>
        <Outlet />
      </Box>
    </Box>
  )
}
