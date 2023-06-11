import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import '@fontsource/manrope'
import '@fontsource/manrope/800.css'
import '@fontsource/manrope/700.css'
import '@fontsource/manrope/600.css'
import '@fontsource/manrope/500.css'

import { App } from './App'

const theme = extendTheme({
  colors: {
    brandMain: {
      500: '#df4058',
      600: '#cd3150'
    },
    brand: {
      B300: '#D53858',
      S300: '#DF4058',
      L300: '#194CC3',
      PO300: '#3C8826',
      D300: '#B24025',
      W300: '#F29F23'
    },
    gray: {
      50: '#F7F7F7',
      60: '#F2F2F2',
      75: '#DDDDDD',
      100: '#DEDEDE',
      200: '#BFBFBF',
      300: '#B0B0B0',
      400: '#B1B1B1',
      500: '#727272'
    },
    ink: {
      normal: '#252525',
      lighter: '#697D95',
      standard: '#717171',
      light: '#B0B0B0'
    },
    blacks: {
      blackish: '#333333',
      black: '#000000'
    },
    link: {
      L50: '#E6F0FF',
      L100: '#6BA6FF',
      L400: '#0047B3'
    }
  },
  fonts: {
    heading: 'Manrope, sans-serif',
    body: 'Manrope, sans-serif'
  },
  initialColorMode: 'light',
  useSystemColorMode: false
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
