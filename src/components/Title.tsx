import { Box, Heading, VStack, Text, HStack,keyframes } from "@chakra-ui/react";
import { Button, ButtonGroup } from '@chakra-ui/react';
import { Highlight } from '@chakra-ui/react'
import { Wrap, WrapItem } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Container } from '@chakra-ui/react'

//animations
const gradient = keyframes`

0% {
  background-position: 0 80%;
}
50% {
  background-position: 100% 50%;
}
100% {
  background-position: 0 80%;
}
`;

const animation = ` ${gradient} 4s ease-in-out infinite`;





export function Title()
{
    return (
    /* Structure for title section */
  <Box as ='main' >

  <VStack textAlign='center' spacing ='7'>
  <Heading as="h1" fontSize='6xl'
  maxW={{base:'lg', md:'xl', lg:'2xl'}}
  > 
  The Ultimate NFT {' '}

  <Text as ={motion.div}
  animation={animation}
  bgSize= '300%'
  bgGradient='linear-gradient(to right,#00FFA3, #03E1FF,#DC1FFF);'
  bgClip='text'
  fontSize='6xl'
  fontWeight='bold'

>
  Experience
  </Text>
        
  </Heading>

  <Text fontSize= '2xl'>Your one stop shop for everything  {' '}
    <Highlight
      query='NFTs'
      styles={{ px: '2', py: '1', rounded: 'full', bg: ' #03E1FF' }}>
      NFTs
    </Highlight>


  </Text>
        {/* <HStack spacing ="8">
        <Button bgGradient = 'linear-gradient(145deg,#DC1FFF,#03E1FF,#00FFA3 )' >
        <Text color='white'>Something</Text>

        
        </Button>


        <Button colorScheme='purple' variant='outline'>
        Button
        </Button>
       
       

        </HStack> */}
       


</VStack>
</Box>

)


}

