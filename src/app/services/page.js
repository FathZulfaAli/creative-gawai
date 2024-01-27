/** @format */ "use client";

import { Container, SimpleGrid, Image, Flex, Heading, Text, Stack, StackDivider, Icon, Button, Box, List, ListItem } from "@chakra-ui/react";
import Link from "next/link";
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from "react-icons/io5";

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex w={8} h={8} align={"center"} justify={"center"} rounded={"full"} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function Services() {
  const playstoreImg = "https://www.heygotrade.com/static/4a5aa1d1b2451dda688e953b710e7f76/5e752/google-play-badge.png";
  const applestoreImg = "https://www.heygotrade.com/static/fd6f7a21db9c18b983fa7af4d137618f/640bb/download-apple-store.png";

  return (
    <>
      <Container maxW={"5xl"} py={"20px"}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={"uppercase"}
              color={"blue.400"}
              fontWeight={600}
              fontSize={"sm"}
              bg={"blue.50"}
              p={2}
              alignSelf={"flex-start"}
              rounded={"md"}
            >
              Our Story
            </Text>
            <Heading>A financial stock market agency</Heading>
            <Text color={"gray.500"} fontSize={"lg"}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            </Text>
            <Stack spacing={4} divider={<StackDivider borderColor={"gray.700"} />}>
              <Feature icon={<Icon as={IoAnalyticsSharp} color={"yellow.100"} w={5} h={5} />} iconBg={"yellow.900"} text={"Stock Chart"} />
              <Feature icon={<Icon as={IoLogoBitcoin} color={"green.100"} w={5} h={5} />} iconBg={"green.900"} text={"Expert Analysis"} />
              <Feature icon={<Icon as={IoSearchSharp} color={"purple.100"} w={5} h={5} />} iconBg={"purple.900"} text={"Market Analysis"} />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={"https://www.heygotrade.com/static/gti-telegram-phone-mockup-1df48c6dae581dcb2a2233c7f780c242.svg"}
              objectFit={"cover"}
            />
          </Flex>
        </SimpleGrid>
      </Container>
      <Container maxW={"3xl"}>
        <Stack as={"Box"} textAlign={"center"} spacing={{ base: 8, md: 14 }}>
          <Heading fontWeight={600} fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }} lineHeight={"110%"}>
            GoTrade <br />
            <Text as={"span"} color={"green.400"}>
              Mobile
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            Trade on the go with GoTrade Mobile, our feature-rich mobile app. Access your portfolio, execute trades, and stay updated on market news,
            all from the convenience of your mobile device. GoTrade Mobile empowers you to take control of your investments anytime, anywhere.
          </Text>
          <Stack direction={"column"} spacing={3} align={"center"} alignSelf={"center"} position={"relative"}>
            <Box>
              <Text as={"b"}>Download Now</Text>
              <List pt={"20px"}>
                <ListItem>
                  <Link href={"https://apps.apple.com/us/app/gotrade-indonesia-us-stocks/id1603395383"}>
                    <Image src={applestoreImg} alt='apple store' width={200} />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href={"https://play.google.com/store/apps/details?id=io.tr8.gotradeindo.android&pli=1"}>
                    <Image src={playstoreImg} width={200} alt='play store' />
                  </Link>
                </ListItem>
              </List>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
