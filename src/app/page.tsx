"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Flex,
  Grid,
  Image,
  Text,
  Link,
} from "@chakra-ui/react";
import TextEffect from "@/components/TextEffect";

const HeroSection = () => {
  return (
    <Box
      bgImage="/pixelcut-export%20copy.jpeg"
      bgSize="cover"
      bgPosition="center"
      height="80vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Container maxW="7xl" py={10}>
        <Flex direction="column" justifyContent="center" gap={2}>
          <Text display="inline-block" bg="green.400" width="fit-content" fontSize="4xl" color="white">
            Dynamic Tech Magic with CAHAYA LEAD Ltd.
          </Text>
          <TextEffect />
        </Flex>
      </Container>
    </Box>
  );
};

const CompanyOverview = () => {
  return (
    <Box py={20} bg="black.200">
      <Container maxW="7xl">
        <Text fontSize="2xl" color="yellow.600">
          CAHAYA Ltd. is a leading technology company that specializes in
          providing innovative solutions to businesses. Our team of experts has
          years of experience in developing cutting-edge technology that helps
          businesses grow and succeed.
        </Text>
      </Container>
    </Box>
  );
};

const ProductsOrServices = () => {
  return (
    <Box py={20} bg="black.200">
      <Container maxW="7xl">
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <Box>
            <Text fontSize="xl" color="yellow.200">
              Custom Software Development
            </Text>
            <Text fontSize="md" color="white.500">
              Tailored solutions built from scratch to meet specific business
              needs or requirements.
            </Text>
            <Link href="/service1" color="green.500">
              Learn More
            </Link>
          </Box>
          <Box>
            <Text fontSize="xl" color="yellow.200">
              Consulting and Strategy
            </Text>

            <Text fontSize="md" color="black">
              Offering expert advice, feasibility studies, and strategic
              planning to optimize software projects and IT infrastructure.
            </Text>

            <Link href="/service2" color="green.500">
              Learn More
            </Link>
          </Box>

          <Box>
            <Text fontSize="xl" color="yellow.200">
              Secure System
            </Text>

            <Text fontSize="md" color="black">
              Implementing robust defenses such as firewalls, encryption, and
              access controls to safeguard against unauthorized access and cyber
              threats.
            </Text>

            <Link href="/service3" color="green.500">
              Learn More
            </Link>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

const Testimonials = () => {
  return (
    <Box py={20} bg="black.100">
      <Container maxW="7xl">
        <Text fontSize="2xl" color="yellow.200" mb="15px">
          Don't just take our word for it. Here's what our customers say:
        </Text>
        <Grid templateColumns="1fr 1fr" gap={6}>
          <Box>
            <Text fontSize="md" color="green.500" >
              "CAHAYA LEAD Ltd. has been instrumental in helping us grow our
              business. Their innovative solutions have increased our revenue by
              20%."
            </Text>
            <Text fontSize="sm" color="white">
              - Alex Hong, CEO of Candlelix Corporation
            </Text>
          </Box>
          <Box>
            <Text fontSize="md" color="green.500">
              "We were impressed by CAHAYA Ltd.'s expertise and professionalism.
              They delivered high-quality solutions that met our needs."
            </Text>
            <Text fontSize="sm" color="white">
              - Frans Joadi, CTO of Walnew Corporation
            </Text>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <>
      <HeroSection />
      <CompanyOverview />
      <ProductsOrServices />
      <Testimonials />
      {/* Add your navigation component here, e.g. */}
      {/* <Nav open={nav} onClose={closeNav} /> */}
    </>
  );
};

export default HomePage;
