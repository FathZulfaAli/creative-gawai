/** @format */

import { Box, Button, Container, HStack, Spacer, Text } from "@chakra-ui/react";
import Link from "next/link";
import logo from "../assets/logo.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <Box m={"0px"} as="navbar" position="sticky" top={"0"} zIndex={"100"}>
      <Container maxW={"100vw"} bgColor={"black"}>
        <HStack py={"10px"} pl={"5%"}>
          <Link href={"/"}>
            <HStack gap={"0px"}>
              <Text color={"white"} as={"b"} fontSize={"40px"}>
                Gotrade.
              </Text>
              <Image src={logo} alt="logo" width={60} height={10}></Image>
            </HStack>
          </Link>
          <Spacer />
          <Link href={"/"}>
            <Button
              transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
              bg="#33d49d"
              color="white"
              _hover={{ bg: "#32a07b" }}
              _active={{
                bg: "#33d49d",
                transform: "scale(0.98)",
                borderColor: "#33d49d",
              }}
            >
              Home
            </Button>
          </Link>
          <Link href={"/about"}>
            <Button
              transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
              bg="#33d49d"
              color="white"
              _hover={{ bg: "#32a07b" }}
              _active={{
                bg: "#33d49d",
                transform: "scale(0.98)",
                borderColor: "#33d49d",
              }}
            >
              About
            </Button>
          </Link>
          <Link href={"/team"}>
            <Button
              transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
              bg="#33d49d"
              color="white"
              _hover={{ bg: "#32a07b" }}
              _active={{
                bg: "#33d49d",
                transform: "scale(0.98)",
                borderColor: "#33d49d",
              }}
            >
              Team
            </Button>
          </Link>
        </HStack>
      </Container>
    </Box>
  );
}
