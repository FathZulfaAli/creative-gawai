/** @format */

import {
  Box,
  Container,
  HStack,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppinFont = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Navbar() {
  return (
    <Box m={"0px"} pos={"sticky"}>
      <Container bgColor={"black"} maxW={"100vw"}>
        <HStack className={poppinFont.className} pt={"20px"} pl={"5%"}>
          <HStack gap={"0px"}>
            <Text as={"b"} fontSize={"30px"} color={"white"}>
              Creative
            </Text>
            <Text fontSize={"30px"} color={"white"}>
              Gawai
            </Text>
          </HStack>
          <Spacer />
          <Container color={"white"} p={"10px"} gap={"5px"}>
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/team"}>team</Link>
          </Container>
        </HStack>
      </Container>
    </Box>
  );
}
