import { Box, Container, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box bg="green" color="white">
      <Container maxW="7xl">
        <Flex justifyContent="space-between" py={4}>
          <Flex direction="column" flex={1}>
            <Text fontSize="lg" fontWeight="bold" mb={2}>
              CAHAYA Ltd.
            </Text>
            <Text mb={4}>
              Dynamic Tech Magic with CAHAYA Ltd. is a leading technology
              company that provides innovative solutions to businesses and
              individuals.
            </Text>
          </Flex>
          <Flex direction="column" flex={1} justifyContent="end">
            <Text mb={2}>Address: 123 Main St, Anytown, USA</Text>
            <Text mb={2}>Phone: +1 (123) 455-7282</Text>
            <Text mb={2}>
              Email: [info@cahayaltd.com](mailto:info@cahayaltd.com)
            </Text>
            
          </Flex>
        </Flex>
        
      </Container>
      <Text textAlign="center" borderTop="1px solid black" py={4}>Copyright 2023 CAHAYA Ltd. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;
