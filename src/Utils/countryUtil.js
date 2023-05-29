import { Badge } from '@chakra-ui/react'
import React from 'react'

export const getCountry =  (data) => {

  if(data==='china'){
    return <Badge bgColor='red.300' size={'md'}>CN 🇨🇳</Badge>
  }
}
