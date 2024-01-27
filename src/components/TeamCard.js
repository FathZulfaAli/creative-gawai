/** @format */
"use client";

import { Center, Flex, Grid, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function TeamCard() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=20");
        const data = await response.json();

        setUserList(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Center mt={"20px"}>
        <VStack>
          <Heading>Our Beloved Team</Heading>
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={2} px={5}>
            {userList.map((user, index) => (
              <Center py={6} key={index}>
                <Stack
                  borderWidth='1px'
                  borderRadius='lg'
                  w={{ base: "100%", md: "540px" }}
                  height={{ sm: "476px", md: "20rem" }}
                  direction={{ base: "column", md: "row" }}
                  bg={"gray.900"}
                  boxShadow={"2xl"}
                  padding={4}
                >
                  <Flex flex={1} bg='blue.200'>
                    <Image objectFit='cover' boxSize='100%' src={user.picture?.large || ""} alt={`User ${index + 1}`} />
                  </Flex>
                  <Stack flex={1} flexDirection='column' justifyContent='center' alignItems='center' p={1} pt={2}>
                    <Heading fontSize={{ base: "xl", md: "2xl" }} fontFamily='body' color={"white"}>
                      {`${user.name?.title} ${user.name?.first} ${user.name?.last}`}
                    </Heading>
                    <Text fontWeight={600} color={"gray.500"} size='sm' mb={4}>
                      {user.email}
                    </Text>
                  </Stack>
                </Stack>
              </Center>
            ))}
          </Grid>
        </VStack>
      </Center>
    </>
  );
}
