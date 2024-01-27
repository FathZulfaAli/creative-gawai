/** @format */

import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import SwiperSlider from "@/components/LogoSlider";
import Link from "next/link";
import HomeTab from "@/components/HomeTab";

export default function Home() {
  return (
    <>
      <Center>
        <Flex mx={"30px"} mt={"25px"}>
          <Container m={"10px"} ml={"2%"} maxW={"50rem"}>
            <Heading size={"3xl"}>Diversifikasi portfoliomu,</Heading>
            <Heading size={"3xl"} mb={"20px"}>
              tumbuhin asetmu
            </Heading>
            <Text fontSize={"xl"} maxW={"30rem"}>
              Gabung sama lebih dari <Text as={"b"}>600 ribu</Text> investor di Indonesia yang investasi saham AS seperti Apple, Goole & Netflix,
              hanya dengan Rp. 15,000.
            </Text>

            <SwiperSlider />
            <Button
              py={"27px"}
              px={"30px"}
              transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
              bg='#33d49d'
              color='white'
              _hover={{ bg: "#32a07b" }}
              _active={{
                bg: "#33d49d",
                transform: "scale(0.98)",
                borderColor: "#33d49d",
              }}
              mb={"25px"}
            >
              Download Gotrade
            </Button>
            <Flex gap={"30px"}>
              <Box>
                <Text fontSize={"md"} color={"#86898D"}>
                  Terdaftar & diawasi oleh
                </Text>
                <Text fontSize={"xl"}>Bappebti dan Kominfo</Text>
                <Image alt={"Kominfo dan bappebti"} src='https://www.heygotrade.com/4493c5d10ef4c9d133636077b7e0c529.svg' mt={"20px"} mb={"20px"} />
                <Link href={"/bappebtikominfo"}>
                  <Text color={"#33D49D"}>
                    Pelajari lebih lanjut <Icon as='ChevronRightIcon' />
                  </Text>
                </Link>
              </Box>
              <Box>
                <Text fontSize={"md"} color={"#86898D"}>
                  Dipercaya lebih dari
                </Text>
                <Text fontSize={"xl"}>1 juta pengguna</Text>
                <Image alt={"Kompas"} src='https://www.heygotrade.com/37c7ab093a3ba9133ef06230c16f6ff1.svg' mt={"40px"} mb={"35px"} />
                <Link
                  target='_blank'
                  href={"https://www.kompas.id/baca/adv_post/gotrade-kini-legal-di-indonesia-trading-app-pertama-untuk-akses-pasar-saham-as"}
                >
                  <Text color={"#33D49D"}>
                    Pelajari lebih lanjut <Icon as='ChevronRightIcon' />
                  </Text>
                </Link>
              </Box>
              <Box>
                <Text fontSize={"md"} color={"#86898D"}>
                  App pilihan
                </Text>
                <Text fontSize={"xl"}>Felicia Tjiasaka, CFA</Text>
                <Text fontSize={"sm"} color={"#86898D"}>
                  Investment Storyteller
                </Text>
                <Image alt={"Falicia"} src='https://www.heygotrade.com/static/felicia-6142dcd3d8de4cf33c12909abfc787e6.svg' mt={"5px"} mb={"13px"} />
                <Link href={"/felicia_tertimoni"}>
                  <Text color={"#33D49D"}>
                    Pelajari lebih lanjut <Icon as='ChevronRightIcon' />
                  </Text>
                </Link>
              </Box>
            </Flex>
            <Flex gap={"30px"} mt={"10px"}></Flex>
          </Container>
          <Container maxW={"55vh"} mt={"25px"}>
            <Box
              as='video'
              src='https://www.heygotrade.com/static/gti-preview-video-74268bcee3e1355b3953d25ecb59d3dd.mp4'
              loop
              autoPlay
              muted
              display={{ base: "none", md: "block" }}
            ></Box>
          </Container>
        </Flex>
      </Center>
      {/* Card about us */}
      <Center>
        <SimpleGrid spacing={7} templateColumns={{ base: "1fr", md: "repeat(auto-fill, minmax(200px, 1fr))" }} mt={"70px"}>
          <Card>
            <CardHeader>
              <Heading fontSize={"md"}>Dapetin financial freedom 🚀</Heading>
            </CardHeader>
            <CardBody>
              <Text>Investasi adalah cara terbaik untuk menumbuhkan kekayaan dalam jangka waktu panjang.</Text>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <Heading fontSize={"md"}>Mulai dari Rp 15.000 💰</Heading>
            </CardHeader>
            <CardBody>
              <Text>Lupain beli saham harus pakai lot. Sekarang kamu bisa beli dari 0,00001 saham dengan minimum Rp 15.000.</Text>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <Heading fontSize={"md"}>Investasi dengan aman 🛡️</Heading>
            </CardHeader>
            <CardBody>
              <Text>Gotrade dan partnernya telah diregulasi oleh Bappebti. Semua trade kamu selalu dibacking sama saham asli di AS.</Text>
            </CardBody>
          </Card>
        </SimpleGrid>
      </Center>
      {/* HomeTab */}
      <Center mt={"80px"}>
        <HomeTab />
      </Center>
    </>
  );
}
