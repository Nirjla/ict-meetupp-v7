import React from 'react';
import { Box, Image, Text, Button,Flex } from "@chakra-ui/react";
import robot from '../assets/robot.png';

const Home = () => {
  
  return (
    <div>
      <Flex>
        {/* Left Column */}
        <Box
          flex="1"
          fontFamily=""
          fontWeight={700}
          lineHeight='7rem'
          bg='blue.700'
          pl='7rem'
          pt='3rem'
        >
          <Text fontSize='100px' color="orange.100" fontWeight={700}>ICT</Text>
          <Text fontSize='100px' color="blue.100" fontWeight={700}>MEETUP</Text>
          <Text fontSize='md' color='white' fontWeight={100}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, cum!
          </Text>
          <Button colorScheme="blue" size="lg">
            Register
          </Button>
        </Box>

        {/* Right Column */}
        <Box flex="1" bg='blue.700' pt='3rem'>
          <Image src={robot} />
        </Box>
      </Flex>

      {/* About */}
     
    </div>
  );
}

export default Home;
