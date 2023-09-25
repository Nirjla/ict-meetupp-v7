import {Flex, Box, Heading, Divider, Text, List, ListItem, Image, Stack} from '@chakra-ui/react'
import {ReactComponent as icon} from '../assets/icon.svg'
import event from '../assets/Events.png'

const Events = () => {
  return (
    <div>
      <div>
      <Flex bg={'black.100'} color={'white.100'} pt={'3rem'} px={'4rem'} alignItems={'center'}>
      <Box flex={1}>
        
        <Stack direction='row'>
  <Divider orientation='vertical' borderWidth='2px' />
  <Heading>
            Events.
          </Heading>
</Stack>
          <Heading>
            02
          </Heading>
          <Text>
            Competitions
          </Text>
          <List spacing={3}>
      <ListItem>
        <Flex alignItems="center">
          <Box as={icon} w="24px" h="24px" mr="2" /> {/* Use custom icon as React component */}
          <Text> UI/UX</Text>
        </Flex>
      </ListItem>
      <ListItem>
        <Flex alignItems="center">
          <Box as={icon} w="24px" h="24px" mr="2" /> {/* Use custom icon as React component */}
          <Text> UI/UX</Text>
        </Flex>
      </ListItem>
      <ListItem>
        <Flex alignItems="center">
          <Box as={icon} w="24px" h="24px" mr="2" /> {/* Use custom icon as React component */}
          <Text> UI/UX</Text>
        </Flex>
      </ListItem>
     </List>
          </Box>

          
          <Box flex={1}>
            <Image src={event} h={'20rem'} w={'40rem'}></Image>
          </Box>

      </Flex>

    </div>

    </div>
  )
}

export default Events
