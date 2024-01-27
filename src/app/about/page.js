/** @format */
"use client";

import TeamMember from "@/helper/TeamMember";
import { Box, Card, CardBody, CardHeader, Center, HStack, Heading, Image, ListItem, SimpleGrid, Text, UnorderedList, VStack } from "@chakra-ui/react";

import React from "react";
import { useState } from "react";

export default function About() {
  const [isMd, setIsMd] = useState(true);

  const handleResponsive = () => {
    setIsMd(window.innerWidth >= 768);
  };

  if (typeof window !== "undefined") {
    window.addEventListener("resize", handleResponsive);
  }

  const backgroundImg = "https://downloads.intercomcdn.com/i/o/243776/0f02d0f945c244096e8461e7/74ca18f6e255f3402ee9eae5402ceee1.png";
  const whyUs = "https://res.cloudinary.com/dzdrs7dkj/image/upload/v1705845801/txmto4uqlnr7sgirfpg9.jpg";

  return (
    <>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        width='100%'
        bgImage={`url(${backgroundImg})`}
        bgPosition='center'
        bgRepeat='no-repeat'
      >
        <VStack minHeight='100vh' pb={{ base: "30px", md: "30px", lg: "0px" }}>
          <Heading mt={"80px"}>Who We Are</Heading>
          <Text as={"b"} w={"80%"} textAlign={"center"}>
            Selamat datang di GoTrade, platform revolusioner yang dirancang untuk memperbarui cara individu terlibat dengan pasar saham dan membentuk
            masa depan keuangan anda
          </Text>
          <Heading mt={20}>Our To Do List</Heading>
          <Center>
            <SimpleGrid spacing={7} templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} mt={"10px"} maxW={"1000px"}>
              <Card>
                <CardHeader>
                  <Heading fontSize={"md"}>Misi Pendidikan Finansial</Heading>
                </CardHeader>
                <CardBody>
                  <Text>Memberikan akses pendidikan finansial agar setiap pengguna dapat membuat keputusan investasi yang bijak.</Text>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <Heading fontSize={"md"}>Misi Keamanan dan Transparansi</Heading>
                </CardHeader>
                <CardBody>
                  <Text>Menempatkan keamanan dan transparansi sebagai prioritas utama untuk melindungi data dan investasi pengguna.</Text>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <Heading fontSize={"md"}>Misi Inklusivitas</Heading>
                </CardHeader>
                <CardBody>
                  <Text>
                    Mendorong inklusivitas dan pemberdayaan dengan menciptakan platform yang mudah diakses bagi investor dari berbagai latar belakang.
                  </Text>
                </CardBody>
              </Card>
            </SimpleGrid>
          </Center>
        </VStack>
      </Box>
      {isMd ? (
        <>
          <Center>
            <HStack>
              <Box mt={0}>
                <Image src={whyUs} alt='WhyUs-Gotrade' width='100%' maxW={{ base: "auto", md: "800px" }} />
              </Box>
              <VStack ml={"20px"} maxW={"600px"}>
                <Heading>Why GoTrade ?</Heading>
                <UnorderedList>
                  <ListItem>GoTrade menghadirkan panduan investasi ahli dari tim berpengalaman.</ListItem>
                  <ListItem>Interface sederhana GoTrade memastikan pengalaman pengguna tanpa hambatan.</ListItem>
                  <ListItem>Bergabunglah dalam komunitas investor GoTrade untuk berbagi ide dan inspirasi kesuksesan keuangan.</ListItem>
                </UnorderedList>
              </VStack>
            </HStack>
          </Center>
          <Center mt={100}>
            <VStack>
              <VStack>
                <TeamMember
                  name={"Martin Sutherland"}
                  role='President'
                  imageUrl='https://res.cloudinary.com/dzdrs7dkj/image/upload/v1705853534/Inner%20Team/rjnfqcjnvti3juxm4dl8.jpg'
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet porttitor eget dolor morbi. Elementum facilisis leo vel fringilla est ullamcorper eget. Bibendum neque egestas congue quisque egestas diam in arcu cursus. Vulputate dignissim suspendisse in est ante. Curabitur vitae nunc sed velit dignissim sodales ut eu. Pellentesque sit amet porttitor eget dolor morbi non. Et magnis dis parturient montes nascetur ridiculus. Purus non enim praesent elementum facilisis leo vel fringilla est. Viverra adipiscing at in tellus integer. Et pharetra pharetra massa massa ultricies mi quis. Facilisis gravida neque convallis a cras semper auctor neque."
                  }
                />
              </VStack>
              <Center gap={"20px"}>
                <TeamMember
                  name={"Ragamuffin Fisher"}
                  role='Chief Executive Officer'
                  imageUrl='https://res.cloudinary.com/dzdrs7dkj/image/upload/v1705856306/Inner%20Team/x9dkmxadhvpelxh9je7p.png'
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet porttitor eget dolor morbi. Elementum facilisis leo vel fringilla est ullamcorper eget. Bibendum neque egestas congue quisque egestas diam in arcu cursus. Vulputate dignissim suspendisse in est ante. Curabitur vitae nunc sed velit dignissim sodales ut eu. Pellentesque sit amet porttitor eget dolor morbi non. Et magnis dis parturient montes nascetur ridiculus. Purus non enim praesent elementum facilisis leo vel fringilla est. Viverra adipiscing at in tellus integer. Et pharetra pharetra massa massa ultricies mi quis. Facilisis gravida neque convallis a cras semper auctor neque."
                  }
                />
                <TeamMember
                  name={"Frank Maxwell"}
                  role='Chief Technology Officer'
                  imageUrl='https://res.cloudinary.com/dzdrs7dkj/image/upload/v1705856307/Inner%20Team/fbvxmflubjlxhxxlnnmq.png'
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet porttitor eget dolor morbi. Elementum facilisis leo vel fringilla est ullamcorper eget. Bibendum neque egestas congue quisque egestas diam in arcu cursus. Vulputate dignissim suspendisse in est ante. Curabitur vitae nunc sed velit dignissim sodales ut eu. Pellentesque sit amet porttitor eget dolor morbi non. Et magnis dis parturient montes nascetur ridiculus. Purus non enim praesent elementum facilisis leo vel fringilla est. Viverra adipiscing at in tellus integer. Et pharetra pharetra massa massa ultricies mi quis. Facilisis gravida neque convallis a cras semper auctor neque."
                  }
                />
                <TeamMember
                  name={"Arabella Vaughan"}
                  role='Chief Financial Officer'
                  imageUrl='https://res.cloudinary.com/dzdrs7dkj/image/upload/v1705856532/Inner%20Team/hz02ks1cc6aobav34vwv.png'
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet porttitor eget dolor morbi. Elementum facilisis leo vel fringilla est ullamcorper eget. Bibendum neque egestas congue quisque egestas diam in arcu cursus. Vulputate dignissim suspendisse in est ante. Curabitur vitae nunc sed velit dignissim sodales ut eu. Pellentesque sit amet porttitor eget dolor morbi non. Et magnis dis parturient montes nascetur ridiculus. Purus non enim praesent elementum facilisis leo vel fringilla est. Viverra adipiscing at in tellus integer. Et pharetra pharetra massa massa ultricies mi quis. Facilisis gravida neque convallis a cras semper auctor neque."
                  }
                />
                <TeamMember
                  name={"Alma Harrison"}
                  role='Chief Marketing Officert'
                  imageUrl='https://res.cloudinary.com/dzdrs7dkj/image/upload/v1705853533/Inner%20Team/i4szqz5qmgcn5qjmcjgx.jpg'
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet porttitor eget dolor morbi. Elementum facilisis leo vel fringilla est ullamcorper eget. Bibendum neque egestas congue quisque egestas diam in arcu cursus. Vulputate dignissim suspendisse in est ante. Curabitur vitae nunc sed velit dignissim sodales ut eu. Pellentesque sit amet porttitor eget dolor morbi non. Et magnis dis parturient montes nascetur ridiculus. Purus non enim praesent elementum facilisis leo vel fringilla est. Viverra adipiscing at in tellus integer. Et pharetra pharetra massa massa ultricies mi quis. Facilisis gravida neque convallis a cras semper auctor neque."
                  }
                />
              </Center>
            </VStack>
          </Center>
        </>
      ) : (
        <>
          <Center mt={"20px"}>
            <HStack>
              <VStack maxW={"600px"}>
                <Heading>Why GoTrade ?</Heading>
                <UnorderedList>
                  <ListItem>GoTrade menghadirkan panduan investasi ahli dari tim berpengalaman.</ListItem>
                  <ListItem>Interface sederhana GoTrade memastikan pengalaman pengguna tanpa hambatan.</ListItem>
                  <ListItem>Bergabunglah dalam komunitas investor GoTrade untuk berbagi ide dan inspirasi kesuksesan keuangan.</ListItem>
                </UnorderedList>
              </VStack>
            </HStack>
          </Center>

          <Center mt={100}>
            <VStack>
              <TeamMember
                name={"Martin Sutherland"}
                role='President'
                imageUrl='https://res.cloudinary.com/dzdrs7dkj/image/upload/v1705853534/Inner%20Team/rjnfqcjnvti3juxm4dl8.jpg'
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet porttitor eget dolor morbi. Elementum facilisis leo vel fringilla est ullamcorper eget. Bibendum neque egestas congue quisque egestas diam in arcu cursus. Vulputate dignissim suspendisse in est ante. Curabitur vitae nunc sed velit dignissim sodales ut eu. Pellentesque sit amet porttitor eget dolor morbi non. Et magnis dis parturient montes nascetur ridiculus. Purus non enim praesent elementum facilisis leo vel fringilla est. Viverra adipiscing at in tellus integer. Et pharetra pharetra massa massa ultricies mi quis. Facilisis gravida neque convallis a cras semper auctor neque."
                }
              />

              <TeamMember
                name={"Ragamuffin Fisher"}
                role='Chief Executive Officer'
                imageUrl='https://res.cloudinary.com/dzdrs7dkj/image/upload/v1705856306/Inner%20Team/x9dkmxadhvpelxh9je7p.png'
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet porttitor eget dolor morbi. Elementum facilisis leo vel fringilla est ullamcorper eget. Bibendum neque egestas congue quisque egestas diam in arcu cursus. Vulputate dignissim suspendisse in est ante. Curabitur vitae nunc sed velit dignissim sodales ut eu. Pellentesque sit amet porttitor eget dolor morbi non. Et magnis dis parturient montes nascetur ridiculus. Purus non enim praesent elementum facilisis leo vel fringilla est. Viverra adipiscing at in tellus integer. Et pharetra pharetra massa massa ultricies mi quis. Facilisis gravida neque convallis a cras semper auctor neque."
                }
              />
              <TeamMember
                name={"Frank Maxwell"}
                role='Chief Technology Officer'
                imageUrl='https://res.cloudinary.com/dzdrs7dkj/image/upload/v1705856307/Inner%20Team/fbvxmflubjlxhxxlnnmq.png'
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet porttitor eget dolor morbi. Elementum facilisis leo vel fringilla est ullamcorper eget. Bibendum neque egestas congue quisque egestas diam in arcu cursus. Vulputate dignissim suspendisse in est ante. Curabitur vitae nunc sed velit dignissim sodales ut eu. Pellentesque sit amet porttitor eget dolor morbi non. Et magnis dis parturient montes nascetur ridiculus. Purus non enim praesent elementum facilisis leo vel fringilla est. Viverra adipiscing at in tellus integer. Et pharetra pharetra massa massa ultricies mi quis. Facilisis gravida neque convallis a cras semper auctor neque."
                }
              />
              <TeamMember
                name={"Arabella Vaughan"}
                role='Chief Financial Officer'
                imageUrl='https://res.cloudinary.com/dzdrs7dkj/image/upload/v1705856532/Inner%20Team/hz02ks1cc6aobav34vwv.png'
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet porttitor eget dolor morbi. Elementum facilisis leo vel fringilla est ullamcorper eget. Bibendum neque egestas congue quisque egestas diam in arcu cursus. Vulputate dignissim suspendisse in est ante. Curabitur vitae nunc sed velit dignissim sodales ut eu. Pellentesque sit amet porttitor eget dolor morbi non. Et magnis dis parturient montes nascetur ridiculus. Purus non enim praesent elementum facilisis leo vel fringilla est. Viverra adipiscing at in tellus integer. Et pharetra pharetra massa massa ultricies mi quis. Facilisis gravida neque convallis a cras semper auctor neque."
                }
              />
              <TeamMember
                name={"Alma Harrison"}
                role='Chief Marketing Officert'
                imageUrl='https://res.cloudinary.com/dzdrs7dkj/image/upload/v1705853533/Inner%20Team/i4szqz5qmgcn5qjmcjgx.jpg'
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet porttitor eget dolor morbi. Elementum facilisis leo vel fringilla est ullamcorper eget. Bibendum neque egestas congue quisque egestas diam in arcu cursus. Vulputate dignissim suspendisse in est ante. Curabitur vitae nunc sed velit dignissim sodales ut eu. Pellentesque sit amet porttitor eget dolor morbi non. Et magnis dis parturient montes nascetur ridiculus. Purus non enim praesent elementum facilisis leo vel fringilla est. Viverra adipiscing at in tellus integer. Et pharetra pharetra massa massa ultricies mi quis. Facilisis gravida neque convallis a cras semper auctor neque."
                }
              />
            </VStack>
          </Center>
        </>
      )}
    </>
  );
}
