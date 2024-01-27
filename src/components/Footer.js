/** @format */ "use client";

import { Box, Flex, HStack, Icon, List, ListItem, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { useState } from "react";

export default function Footer() {
  const [isMd, setIsMd] = useState(true);

  const handleResponsive = () => {
    setIsMd(window.innerWidth >= 768);
  };

  if (typeof window !== "undefined") {
    window.addEventListener("resize", handleResponsive);
  }
  const playstoreImg = "https://www.heygotrade.com/static/4a5aa1d1b2451dda688e953b710e7f76/5e752/google-play-badge.png";
  const applestoreImg = "https://www.heygotrade.com/static/fd6f7a21db9c18b983fa7af4d137618f/640bb/download-apple-store.png";
  return (
    <>
      {isMd ? (
        <Box as='footer' py='4' bgColor={"#FAFAFA"} mt={"70px"} bottom={"0"}>
          <Flex gap={"100px"} justifyContent='center' alignItems='center'>
            <Box>
              <Link href={"/"}>
                <HStack gap={"0px"}>
                  <Text color={"black"} as={"b"} fontSize={"40px"}>
                    Gotrade.
                  </Text>
                  <Image src={"https://res.cloudinary.com/dzdrs7dkj/image/upload/v1706364934/lyk2gmdvjs8whgcxfytj.png} alt='logo' width={60} height={10}></Image>
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
                    <Link href={"https://www.facebook.com/heygotrade.id"} target='_blank'>
                      <Icon boxSize={"50px"}>
                        <FaFacebook />
                      </Icon>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href={"https://www.instagram.com/heygotrade_id"} target='_blank'>
                      <Icon boxSize={"50px"}>
                        <GrInstagram />
                      </Icon>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href={"https://twitter.com/heygotrade_id"} target='_blank'>
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
                  <Link href={"https://apps.apple.com/us/app/gotrade-indonesia-us-stocks/id1603395383"}>
                    <Image src={applestoreImg} alt='apple store' width={160} height={20} />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href={"https://play.google.com/store/apps/details?id=io.tr8.gotradeindo.android&pli=1"}>
                    <Image src={playstoreImg} width={160} height={10} alt='play store' />
                  </Link>
                </ListItem>
              </List>
            </Box>
          </Flex>
        </Box>
      ) : (
        <Box ml={"20px"} as='footer' py='4' bgColor={"#FAFAFA"} mt={"70px"} bottom={"0"}>
          <Box>
            <Link href={"/"}>
              <HStack gap={"0px"}>
                <Text color={"black"} as={"b"} fontSize={"40px"}>
                  Gotrade.
                </Text>
                <Image src={logo} alt='logo' width={60} height={10}></Image>
              </HStack>
            </Link>
          </Box>
          <Box mt={"20px"}>
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

          <Box mt={"20px"}>
            <Text as={"b"}>Contributor</Text>
            <List>
              <ListItem>
                <Link href={"/team"}>Our Team</Link>
              </ListItem>
            </List>
          </Box>

          <Box mt={"20px"}>
            <Text as={"b"}>Social</Text>
            <List>
              <HStack>
                <ListItem>
                  <Link href={"https://www.facebook.com/heygotrade.id"} target='_blank'>
                    <Icon boxSize={"50px"}>
                      <FaFacebook />
                    </Icon>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href={"https://www.instagram.com/heygotrade_id"} target='_blank'>
                    <Icon boxSize={"50px"}>
                      <GrInstagram />
                    </Icon>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href={"https://twitter.com/heygotrade_id"} target='_blank'>
                    <Icon boxSize={"50px"}>
                      <BsTwitterX />
                    </Icon>
                  </Link>
                </ListItem>
              </HStack>
            </List>
          </Box>

          <Box mt={"20px"}>
            <Text as={"b"}>Download</Text>
            <List>
              <ListItem>
                <Link href={"https://apps.apple.com/us/app/gotrade-indonesia-us-stocks/id1603395383"}>
                  <Image src={applestoreImg} alt='apple store' width={160} height={20} />
                </Link>
              </ListItem>
              <ListItem>
                <Link href={"https://play.google.com/store/apps/details?id=io.tr8.gotradeindo.android&pli=1"}>
                  <Image src={playstoreImg} width={160} height={10} alt='play store' />
                </Link>
              </ListItem>
            </List>
          </Box>
        </Box>
      )}
    </>
  );
}
