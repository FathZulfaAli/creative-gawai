/** @format */
"use client";

import { Tabs, TabList, TabPanel, TabPanels, Tab, HStack, Box, Text, Img } from "@chakra-ui/react";

export default function HomeTab() {
  return (
    <Tabs isManual variant='soft-rounded' colorScheme='green' align='center'>
      <TabList>
        <Tab>Instan & Praktis</Tab>
        <Tab>Belajar Sambil Investasi</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <HStack>
            <Box maxW={"350"}>
              <Text fontSize='5xl' as={"b"}>
                Mulai trading dalam 10 menit.
              </Text>
              <Text maxW={"300px"}>
                Daftar, deposit dan mulai trading - semua dari handphonemu. Nggak perlu print out dan kirin dokumen, dan nggak perlu nunggu 2 minggu.
              </Text>
            </Box>
            <Img
              alt={"HomeTab 1"}
              src='https://www.heygotrade.com/static/43e0136285f7d09fc3b1f0a9db8dd745/a07a5/gti-instant-paperless-phone.png'
              width={"400px"}
            ></Img>
          </HStack>
        </TabPanel>
        <TabPanel>
          <HStack>
            <Box maxW={"350"}>
              <Text fontSize='5xl' as={"b"}>
                Belajar Sambil Investasi
              </Text>
              <Text maxW={"300px"}>Investasi simple banget untuk semuanya, baik untuk pemula atau yang udah jagp.</Text>
            </Box>
            <Img
              alt={"HomeTab 1"}
              src='https://www.heygotrade.com/static/1fdbeb8be0653b9bb5695eccc488f823/a07a5/learn-grow-phone.png'
              width={"400px"}
            ></Img>
          </HStack>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
