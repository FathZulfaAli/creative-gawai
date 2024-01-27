/** @format */

import { Container, Heading, Text } from "@chakra-ui/react";

export default function bappetikominfo() {
  return (
    <>
      <Container>
        <Heading fontSize={"4xl"} my={"20px"}>
          Terdaftar dan diawasi oleh Bappebti dan Kominfo
        </Heading>
        <Text>
          Gotrade Indonesia dilisensikan oleh PT Valbury Asia Futures dan terdaftar di Kominfo dengan nomor registrasi{" "}
          <Text as={"b"} color={"#33D49D"}>
            {" "}
            002437.03/DJAI.PSE/04/2022.
          </Text>{" "}
          PT Valbury Asia Futures adalah Pialang Berjangka yang diatur oleh Bappebti dengan nomor izin
          <Text as={"b"} color={"#33D49D"}>
            184/Bappebti/SI/II/2003
          </Text>{" "}
          Gotrade Indonesia (melalui PT Valbury Asia Futures) beroperasi di bawah pengaturan Penyaluran Amanat Nasabah Luar Negeri (PALN) Bappebti
          dengan nomor izin{" "}
          <Text as={"b"} color={"#33D49D"}>
            01/BAPPEBTI/KP/10/2016
          </Text>{" "}
          Semua dana dikirim ke PT Kliring Berjangka Indonesia (Persero) yang merupakan badan pengatur mandiri, Badan Usaha Milik Negara (BUMN) dan
          diawasi oleh Bappebti. Semua perdagangan di Gotrade Indonesia terdaftar di Bursa Berjangka Jakarta yang merupakan self-regulatory
          organization dan diawasi oleh Bappebti.
        </Text>
      </Container>
    </>
  );
}
