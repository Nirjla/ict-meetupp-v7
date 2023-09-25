import {Flex, Image, Box, Heading, Text, List , ListItem, Divider} from '@chakra-ui/react'
import { ReactComponent as icon } from '../assets/icon.svg'
import AI from '../assets/AI.png'


const About = () => {
  return (
    <>
       <Flex  bg={'black.100'} color={'white.100'} pt={'3rem'} px={'4rem'} alignItems={'center'}>
      <Box flex={1} >
        <Heading >
        AI Innovation : Sculpting a Brighter Future.
        </Heading>
        </Box>
      <Box flex={1}>
        <Flex>
        <Divider borderColor="white" borderWidth="2px"  my={5}/>
          <Heading>
            ABOUT.
          </Heading>
          </Flex>
          <Text py={'2rem'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ad optio iusto laborum deserunt alias quasi amet itaque voluptas officia.
          </Text>
          </Box>
          
          </Flex>
      {/* AI */}
      <Flex bg={'black.100'} color={'white.100'} pt={'3rem'} px={'4rem'}  alignItems={'center'}>
      <Box flex={1}>
        <Image src={AI} h={'20rem'} w={'40rem'}></Image>
      </Box>
      <Box flex={1}>
        <Heading>Experience the Future of AI through our events</Heading>
        <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum vitae vero explicabo debitis veniam ullam perspiciatis mollitia quaerat voluptates ad!</Text>
        <List spacing={3}>
      <ListItem>
        <Flex alignItems="center">
          <Box as={icon} w="24px" h="24px" mr="2" /> {/* Use custom icon as React component */}
          <Text>Discover cutting-edge technology 1</Text>
        </Flex>
      </ListItem>
      <ListItem>
        <Flex alignItems="center">
          <Box as={icon} w="24px" h="24px" mr="2" /> {/* Use custom icon as React component */}
          <Text>Discover cutting-edge technology 2</Text>
        </Flex>
      </ListItem>
      <ListItem>
        <Flex alignItems="center">
          <Box as={icon} w="24px" h="24px" mr="2" /> {/* Use custom icon as React component */}
          <Text>Discover cutting-edge technology 3</Text>
        </Flex>
      </ListItem>
      <ListItem>
        <Flex alignItems="center">
          <Box as={icon} w="24px" h="24px" mr="2" /> {/* Use custom icon as React component */}
          <Text>Discover cutting-edge technology 3</Text>
        </Flex>
      </ListItem>
    </List>
      </Box>
      </Flex>
      
    </>
  )
}

export default About
