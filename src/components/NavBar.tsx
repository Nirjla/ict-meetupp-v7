import {Link as RouterLink} from 'react-router-dom'
import {Link as ScrollLink} from 'react-scroll'
import { Box, Flex ,Image, Spacer,Button, Link, HStack} from '@chakra-ui/react'
import logo from '../assets/logo.png'


const NavBar = () => {
  return (
  <Box bg='black.100' w='100%' color={'white'} fontFamily={'heading'} py='2' px='4' fontSize={'sm'}>
    <Flex alignItems='center'>
    <Image src={logo} ml='5'/>
    
    <Spacer />
       <HStack spacing='5'>
        <Link as={RouterLink} to="/events" >Events</Link>
        <Link as={RouterLink} to="/schedule" >Schedule</Link>
        <Link as={RouterLink} to="/teams" >Teams</Link>
        <Link as={RouterLink} to="/gallery" >Gallery</Link>
        </HStack>
        <Spacer />
        <Link as={RouterLink} to="/register">
        <Button mr={5} variant={'outline'} fontWeight={'400'} color={'white.100'} fontSize={'sm'} _hover={{ bg: 'white' , color:'black.100'  }} >
          Register
        </Button>
        </Link>
        </Flex>
      </Box>
  )
}

export default NavBar
