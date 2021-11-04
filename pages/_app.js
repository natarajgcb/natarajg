import { ChakraProvider } from "@chakra-ui/react"
import MNGTheme from '../styles/mng.theme'

function MNGApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={MNGTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MNGApp
