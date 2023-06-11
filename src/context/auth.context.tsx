import { type PropsWithChildren, createContext, useState, type Dispatch, type SetStateAction } from 'react'

export interface AuthContextProps {
  hasAccount: boolean
  setHasAccount: Dispatch<SetStateAction<boolean>>
}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

export const AuthProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const [hasAccount, setHasAccount] = useState<boolean>(false)

  return <AuthContext.Provider
    value={{
      hasAccount,
      setHasAccount
    }}>
    {children}
  </AuthContext.Provider>
}
