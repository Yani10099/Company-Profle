import React from "react";
import {
  Box,
  Container,
  Flex,
  Grid,
  Image,
  Text,
  Link,
} from '@chakra-ui/react';

const AboutPage = () => {
  return (
    <Box py={20}>
      <Container maxW="7xl">
        <Text fontSize="4xl" color="yellow.600">
          About Us
        </Text>
        <Text fontSize="md" color="white.500">
          CAHAYA Ltd. is a leading technology company that specializes in
          providing innovative solutions to businesses. Our team of experts has
          years of experience in developing cutting-edge technology that helps
          businesses grow and succeed.
        </Text>
        <Flex direction="column" gap={6} py={10}>
          <Image src="/istockphoto-1488104508-612x612.jpg" alt="About Us Image" /> 
          <Text fontSize="md" color="white.500">
            Our mission is to empower businesses to achieve their full potential
            through technology. We believe in building long-term relationships with
            our clients and providing them with exceptional service and support.
          </Text>
        </Flex>
        <Grid templateColumns="repeat(2, 1fr)" gap={6} py={10}>
          <Box>
            <Text fontSize="xl" color="white.600">
              Our Values
            </Text>
            <Text fontSize="md" color="white.500">
              We believe in innovation, teamwork, integrity, and fun. These
              values guide our decision-making and shape our company culture.
            </Text>
          </Box>
          <Box>
            <Text fontSize="xl" color="white.600">
              Our Team
            </Text>
            <Text fontSize="md" color="white.500">
              Our team of experts has years of experience in developing
              cutting-edge technology. Meet our team members and learn more about
              their expertise.
            </Text>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutPage;