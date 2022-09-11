import React from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';
import { Grid, GridItem } from '@chakra-ui/react'

export function Collection() {
    
    return (
        
        /* Structure for collection section */
        <Flex >
            <Box alignSelf="center" px="22">
                <Heading fontWeight="normal" color="white" size="2xl">
                    Trending
                </Heading>
                <Heading fontWeight="normal" color="white" size="2xl">
                    Collections:
                </Heading>
            </Box>
           
            <Box alignSelf="center" px="22" py="16">
                <Flex  mt={8} >
                    <Flex rounded="xl" direction="column" mt={4} bg="purple.400" h="30vh" w="30vh" justify="flex-end">
                        <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                            Collection 1
                        </Text>
                    </Flex>
                    <Flex rounded="xl" direction="column" mt={4} ml={4 }
                        bg="purple.400" h="30vh" w="30vh" justify="flex-end" >
                        
                        <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                            Collection 2
                        </Text>
                    </Flex>
                    <Flex rounded="xl" direction="column" mt={4} ml={4 }
                        bg="purple.400" h="30vh" w="30vh" justify="flex-end">
                        <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                            Collection 3
                        </Text>
                    </Flex>
                </Flex>

            </Box>
        </Flex>
        
    )
}

export default Collection