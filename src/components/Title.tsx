import { Box, Heading, VStack, Text, HStack } from "@chakra-ui/react";
import { Button, ButtonGroup } from '@chakra-ui/react';
import { Highlight } from '@chakra-ui/react'
import { Wrap, WrapItem } from '@chakra-ui/react'


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
        <Box className='anime' as='span' bgGradient='linear-gradient(145deg, #00FFA3, #03E1FF,#DC1FFF,)'bgClip = "text" > 
        Experience
        
        </Box>
        </Heading>

    <Text fontSize= '2xl'>Your one stop shop for everything  {' '}
    <Highlight
      query='NFTs'
      styles={{ px: '2', py: '1', rounded: 'full', bg: ' #03E1FF' }}>
      NFTs
    </Highlight>. 

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

