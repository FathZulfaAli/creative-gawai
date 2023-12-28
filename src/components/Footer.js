/** @format */

import {
  Box,
  Flex,
  HStack,
  Icon,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import logo from "../assets/footer_logo.png";
import Image from "next/image";
import Link from "next/link";
import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export default function Footer() {
  const playstoreImg =
    "https://www.heygotrade.com/static/4a5aa1d1b2451dda688e953b710e7f76/5e752/google-play-badge.png";
  const applestoreImg =
    "https://www.heygotrade.com/static/fd6f7a21db9c18b983fa7af4d137618f/640bb/download-apple-store.png";

  return (
    <>
      <Box
        as="footer"
        p="4"
        textAlign="left"
        alignItems={"start"}
        bgColor={"#FAFAFA"}
        mt={"70px"}
        bottom={"0"}
      >
        <Flex mx={"20px"} px={"8%"} gap={"150px"}>
          <Box>
            <Link href={"/"}>
              <HStack gap={"0px"}>
                <Text color={"black"} as={"b"} fontSize={"40px"}>
                  Gotrade.
                </Text>
                <Image src={logo} alt="logo" width={60} height={10}></Image>
              </HStack>
            </Link>
          </Box>
          <Box>
            <Text as={"b"}>Company</Text>
            <List>
              <ListItem>
                <Link href={"/"}>Home</Link>
              </ListItem>
              <ListItem>
                <Link href={"/about"}>About Us</Link>
              </ListItem>
            </List>
          </Box>

          <Box>
            <Text as={"b"}>Contributor</Text>
            <List>
              <ListItem>
                <Link href={"/team"}>Our Team</Link>
              </ListItem>
            </List>
          </Box>

          <Box>
            <Text as={"b"}>Social</Text>
            <List>
              <HStack>
                <ListItem>
                  <Link
                    href={"https://www.facebook.com/heygotrade.id"}
                    target="_blank"
                  >
                    <Icon boxSize={"50px"}>
                      <FaFacebook />
                    </Icon>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href={"https://www.instagram.com/heygotrade_id"}
                    target="_blank"
                  >
                    <Icon boxSize={"50px"}>
                      <GrInstagram />
                    </Icon>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href={"https://twitter.com/heygotrade_id"}
                    target="_blank"
                  >
                    <Icon boxSize={"50px"}>
                      <BsTwitterX />
                    </Icon>
                  </Link>
                </ListItem>
              </HStack>
            </List>
          </Box>

          <Box>
            <Text as={"b"}>Download</Text>
            <List>
              <ListItem>
                <Link
                  href={
                    "https://apps.apple.com/us/app/gotrade-indonesia-us-stocks/id1603395383"
                  }
                >
                  <Image
                    src={applestoreImg}
                    alt="apple store"
                    width={160}
                    height={10}
                  />
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href={
                    "https://play.google.com/store/apps/details?id=io.tr8.gotradeindo.android&pli=1"
                  }
                >
                  <Image
                    src={playstoreImg}
                    width={160}
                    height={10}
                    alt="play store"
                  />
                </Link>
              </ListItem>
            </List>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
