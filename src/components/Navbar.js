/** @format */ "use client";

import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  IconButton,
  Spacer,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import logo from "../assets/logo.png";
import Image from "next/image";
import { useState } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMd, setIsMd] = useState(true);

  const handleResponsive = () => {
    setIsMd(window.innerWidth >= 768);
  };

  if (typeof window !== "undefined") {
    window.addEventListener("resize", handleResponsive);
  }
  return (
    <Box m={"0px"} position='sticky' top={"0"} zIndex={"100"} maxW={"100vw"}>
      <Container maxW={"100vw"} bgColor={"black"}>
        <HStack py={"10px"} pl={"5%"} pr={"2%"}>
          <Link href={"/"}>
            <HStack gap={"0px"}>
              <Text color={"white"} as={"b"} fontSize={"40px"}>
                Gotrade.
              </Text>
              <Image src={logo} alt='logo' width={60} height={10}></Image>
            </HStack>
          </Link>
          {isMd ? (
            <>
              <Spacer />
              <Link href={"/"}>
                <Button
                  transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                  bg='#33d49d'
                  color='white'
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
                  transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                  bg='#33d49d'
                  color='white'
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
                  transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                  bg='#33d49d'
                  color='white'
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
              <Link href={"/services"}>
                <Button
                  transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                  bg='#33d49d'
                  color='white'
                  _hover={{ bg: "#32a07b" }}
                  _active={{
                    bg: "#33d49d",
                    transform: "scale(0.98)",
                    borderColor: "#33d49d",
                  }}
                >
                  Services
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Spacer />
              <IconButton
                icon={<HamburgerIcon />}
                aria-label='Open Navigation'
                onClick={onOpen}
                transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                bg='#33d49d'
                color='white'
                _hover={{ bg: "#32a07b" }}
              />
              <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerHeader borderBottomWidth='1px'>Menu</DrawerHeader>
                  <DrawerBody>
                    <VStack>
                      <Link href='/'>
                        <Button
                          transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                          bg='#33d49d'
                          color='white'
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
                      <Link href='/about'>
                        <Button
                          transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                          bg='#33d49d'
                          color='white'
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
                      <Link href='/team'>
                        <Button
                          transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                          bg='#33d49d'
                          color='white'
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
                      <Link href='/services'>
                        <Button
                          transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                          bg='#33d49d'
                          color='white'
                          _hover={{ bg: "#32a07b" }}
                          _active={{
                            bg: "#33d49d",
                            transform: "scale(0.98)",
                            borderColor: "#33d49d",
                          }}
                        >
                          Services
                        </Button>
                      </Link>
                    </VStack>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </>
          )}
        </HStack>
      </Container>
    </Box>
  );
}
