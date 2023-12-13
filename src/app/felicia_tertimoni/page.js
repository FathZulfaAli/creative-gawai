/** @format */

import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

export default function bappetikominfo() {
  return (
    <Container>
      <Heading fontSize={"4xl"} my={"20px"}>
        Kata Felicia Tjiasaka...
      </Heading>
      <Text>
        Big thanks untuk tim Gotrade yang udah buka akses US market untuk
        masyarakat Indonesia. Tentunya, ini adalah salah satu alternatif terbaik
        untuk diversifikasi secara geografis dan juga mata uang. Udah lama
        banget kita ga punya pilihan untuk investasi di inovasi & trend global
        terbaru, seperti artificial intellegence, cloud computing, blockchain,
        dan machine learning. Setelah ada Gotrade, masyarakat Indonesia bisa
        investasi, jadi pemilik dan ikut menikmati pertumbuhan dari perusahaan
        terbaik dunia dan bahkan dapet dividennya juga! Selain itu, apps Gotrade
        juga hadir dengan UI/UX yang mudah dimengerti, legalitas yang jelas, dan
        juga banyak rewards yang menarik. Semoga lebih banyak inovasi ke
        depannya ya, semangat & congrats!
      </Text>
      <Box mt={"20px"}>
        <Image
          src={
            "https://www.heygotrade.com/dd7fb375db71b0b0d6b9ee3fd4bcd91c.svg"
          }
          alt="Felicia"
          width={200}
          height={300}
        />
        <Flex mt={"20px"} gap={"20px"}>
          <Box>
            <Image
              alt={"Felicia"}
              src="https://www.heygotrade.com/6142dcd3d8de4cf33c12909abfc787e6.svg"
              width={200}
              height={300}
              mt={"5px"}
              mb={"13px"}
            />
          </Box>
          <VStack justifyContent={"flex-start"}>
            <Text fontSize={"xl"}>Felicia Tjiasaka</Text>
            <Text fontSize={"sm"} color={"#86898D"}>
              Investment Storyteller
            </Text>
          </VStack>
        </Flex>
      </Box>
    </Container>
  );
}
