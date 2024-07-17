'use client'


import React from 'react';
import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  Link,
  Icon,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

const services = [
  {
    id: 1,
    title: 'Custom Software Development',
    description: 'We develop custom software solutions tailored to your business needs.',
    image: '/images/service1.jpg',
  },
  {
    id: 2,
    title: 'IT Consulting',
    description: 'Our team of experts provides IT consulting services to help you make informed decisions.',
    image: '/images/service2.jpg',
  },
  {
    id: 3,
    title: 'Cybersecurity',
    description: 'We offer cybersecurity services to protect your business from threats.',
    image: '/images/service3.jpg',
  },
  {
    id: 4,
    title: 'Data Analytics',
    description: 'Our data analytics services help you make data-driven decisions.',
    image: '/images/service4.jpg',
  },
  {
    id: 5,
    title: 'Cloud Services',
    description: 'We offer cloud services to help you scale and grow your business.',
    image: '/images/service5.jpg',
  },
  {
    id: 6,
    title: 'Digital Marketing',
    description: 'Our digital marketing services help you reach your target audience.',
    image: '/images/service6.jpg',
  },
];

const ServicePage = () => {
  return (
    <Box py={20} bg="black.100">
      <Container maxW="7xl">
        <Text fontSize="4xl" color="green.600">
          Our Services
        </Text>
        <Text fontSize="md" color="yellow.500">
          We offer a range of services to help businesses grow and succeed.
        </Text>
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={6}
          py={10}
          justifyItems="center"
        >
          {services.map((service) => (
            <GridItem key={service.id}>
              <Image src={service.image} alt={service.title} />
              <Icon as={FaCheckCircle} color="green.500" fontSize="xl" />
              <Text fontSize="xl" color="aqua.600">
                {service.title}
              </Text>
              <Text fontSize="md" color="yellow.200">
                {service.description}
              </Text>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicePage;