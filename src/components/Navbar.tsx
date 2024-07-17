'use client'
import { Box, Container, Flex, Text, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { Button } from "@react-email/button";
import { EmailIcon } from '@chakra-ui/icons';
import React from 'react'

const Navbar = () => {
  return (
    <Box
      bg="green"
      color="white"
      py={4}
      position="sticky"
      top={0}
      left={0}
      right={0}
      zIndex={3}
      boxShadow="md"
    >
      <Container maxW="7xl">
        <Flex justifyContent="space-between">
          <Text>CAHAYA LEAD</Text>
          <Flex gap={6}>
            <Link href="/">
              Home
            </Link>
            <Link href="/about">
              About
            </Link>
            <Link href="/service">
              Service
            </Link>
            <Link href="/teams" >
              Teams
            </Link>
            <Button href="https://gmail.com" style={{ color: "#61dafb" }}>
              <EmailIcon />
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar