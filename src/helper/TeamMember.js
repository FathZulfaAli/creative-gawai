/** @format */
"use client";

import {
  Box,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  useBoolean,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";

const HoverImage = ({ src, alt, onClick, text }) => {
  const [isHovered, setIsHovered] = useBoolean();

  return (
    <Box position='relative' onMouseEnter={setIsHovered.on} onMouseLeave={setIsHovered.off} cursor={isHovered ? "pointer" : "default"}>
      <Image src={src} alt={alt} borderRadius='full' boxSize='200px' />
      {isHovered && (
        <Box
          onClick={onClick}
          position='absolute'
          top='0'
          left='0'
          right='0'
          bottom='0'
          backgroundColor='rgba(0, 0, 0, 0.5)'
          display='flex'
          alignItems='center'
          justifyContent='center'
          color='white'
          fontSize='lg'
          borderRadius='full'
        >
          {text}
        </Box>
      )}
    </Box>
  );
};

export default function TeamMember({ name, role, imageUrl, description }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(null);

  const OverlayFilter = () => <ModalOverlay bg='blackAlpha.300' />;

  return (
    <Box textAlign='center'>
      <HoverImage
        alt={name}
        src={imageUrl}
        onClick={() => {
          setOverlay(<OverlayFilter />);
          onOpen();
        }}
        text={name}
      />
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>{name}</ModalHeader>
          <ModalCloseButton onClick={onClose} />
          <ModalBody>
            <Text>{description}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
      <VStack spacing={0}>
        <Text as={"u"} fontSize={"lg"}>
          {name}
        </Text>
        <Text as={"b"} fontSize={"md"}>
          {role}
        </Text>
      </VStack>
    </Box>
  );
}
