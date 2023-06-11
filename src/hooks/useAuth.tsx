import { AuthContext, type AuthContextProps } from '@/context/auth.context'
import { useContext } from 'react'

export const useAuth = (): AuthContextProps => {
  return useContext<AuthContextProps>(AuthContext)
}
