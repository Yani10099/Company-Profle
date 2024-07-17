import { getEntries } from '@/libs/contentful'
import { Card, CardBody, Container, Grid, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const TeamPage = async () => {
  const teams = await getEntries()
  console.log(teams);
  
  return (
    <Container maxW="7xl" display="flex" flexDirection="column" alignItems="center" gap={10} py={10}>
      <Heading>TEAM</Heading>
      <Grid templateColumns={{base:"1fr",md:"1fr 1fr 1fr"}} gap={4}>
        {teams?.map((team: any, index: number)=>{
          return(
            <Card maxW='sm'>
        <CardBody>
          <Image
            src={team.images.fields.file.url}
            alt='Green double couch with wooden legs'
            borderRadius='lg'
            height="200px"
            width="100%"
            objectFit="cover"
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{team.nama}</Heading>
            <Text>
             {team.description}
            </Text>
          </Stack>
        </CardBody>
      </Card>
          )
        })}
      
      </Grid>
      
    </Container>
  )
}

export default TeamPage
