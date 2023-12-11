/** @format */

import {
  AspectRatio,
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex mx={"30px"} mt={"25px"}>
      <Container m={"10px"} ml={"2%"} maxW={"50rem"}>
        <Heading size={"3xl"}>Diversifikasi portfoliomu,</Heading>
        <Heading size={"3xl"} mb={"20px"}>
          tumbuhin asetmu
        </Heading>
        <Text fontSize={"xl"} maxW={"30rem"}>
          Gabung sama lebih dari <Text as={"b"}>600 ribu</Text> investor di
          Indonesia yang investasi saham AS seperti Apple, Goole & Netflix,
          hanya dengan Rp. 15,000.
        </Text>
      </Container>
      <Container width={"300px"} mt={"25px"}>
        <Box
          as="video"
          src="https://www.heygotrade.com/static/gti-preview-video-74268bcee3e1355b3953d25ecb59d3dd.mp4"
          loop
          autoPlay
        ></Box>
      </Container>
    </Flex>
  );
}
