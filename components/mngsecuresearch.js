import React from 'react'
import { VStack, Box, Text, Input } from '@chakra-ui/react'

// return a search bar that searches our private, secure, portable history, bookmarks and intelligent suggests as we type (magic bar :) )
// we need a place to securely store and quickly access our private history and bookmarks (real time API)
export default function MNGSecureSearch() {
  const [value, setValue] = React.useState("")
  const handleChange = (event) => setValue(event.target.value)

  return (
    <VStack spacing={2}>
      <Box>
        <Text mb="8px" fontSize="18px" color="#B895B9">Value: {value}</Text>
      </Box>
      <Box>
        <Input
          color="#F8CDF9"
          value={value}
          onChange={handleChange}
          placeholder="Private, Secure Search"
          size="lg"
          w="100%" // how to get the box full width?
        />
      </Box>
    </VStack>
  )
}
