/** @format */

import { Box, Center, Heading, Text } from "@chakra-ui/react";

import { Providers } from "./providers";

export default function Home() {
  return (
    <Providers>
      <Center>
        <Box
          w={"100%"}
          h={"1000px"}
          bgColor={"blue"}
          borderInlineEndRadius={"100%"}
        ></Box>
      </Center>
    </Providers>
  );
}
