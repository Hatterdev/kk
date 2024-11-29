import { NextPage } from "next";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  Link,
} from "@chakra-ui/react";
import { FaTwitter, FaInstagram, FaTelegram } from "react-icons/fa";
import NextLink from "next/link"; // Importe o NextLink para navegação entre páginas

const Home: NextPage = () => {
  return (
    <Box position="relative" minHeight="100vh" overflow="hidden">
      {/* Hero Section */}
      <Box
        bgImage="url('https://raw.githubusercontent.com/Hatterdev/gicimages/refs/heads/main/94ff0475-56cf-44a0-817e-bf3554299601.jpg')"
        bgSize="cover"
        bgPosition="center"
        height="100vh"
        filter="blur(5px)"
        position="absolute"
        width="100%"
        zIndex="-1"
        opacity="0.7"
      ></Box>

      <Flex
        direction="row-reverse"
        align="center"
        justify="space-between"
        padding={{ base: "30px", md: "80px 50px" }}
        color="white"
        wrap="wrap"
        zIndex="1"
      >
        {/* Image on the left */}
        <Box
          position="relative"
          boxSize={{ base: "200px", md: "300px" }}
          borderRadius="lg"
          overflow="hidden"
          border="5px solid #00FF00"
          boxShadow="0 0 10px rgba(0, 255, 0, 0.3)"
          _hover={{ boxShadow: "0 0 15px rgba(0, 255, 0, 0.5)" }}
        >
          <Image
            src="https://raw.githubusercontent.com/Hatterdev/gicimages/refs/heads/main/f48f8eda-4b8e-4ae3-a2e2-8a17d2a29953.jpg"
            alt="NFT Image"
            objectFit="cover"
            height="100%"
            width="100%"
            borderRadius="lg"
          />
        </Box>

        {/* Text and Buttons on the right */}
        <Box
          maxWidth={{ base: "100%", md: "50%" }}
          textAlign="left"
          mb={{ base: "30px", md: "0" }}
        >
          <Heading fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" mb="4">
            Welcome to the NFT Marketplace
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} mb="6">
            Buy, Sell, and Trade NFTs quickly and easily.
          </Text>

          {/* Buttons */}
          <Flex gap="4" direction={{ base: "column", md: "row" }}>
            <NextLink href="/buy" passHref>
              <Button
                size="lg"
                colorScheme="blue"
                variant="outline"
                borderRadius="full"
                _hover={{
                  backgroundColor: "blue.500",
                  boxShadow: "0 0 10px 2px rgba(0, 0, 255, 0.7)",
                  transform: "scale(1.1)",
                }}
                transition="all 0.3s ease"
              >
                BUY
              </Button>
            </NextLink>
            <NextLink href="/sell" passHref>
              <Button
                size="lg"
                colorScheme="blue"
                variant="outline"
                borderRadius="full"
                _hover={{
                  backgroundColor: "blue.500",
                  boxShadow: "0 0 10px 2px rgba(0, 0, 255, 0.7)",
                  transform: "scale(1.1)",
                }}
                transition="all 0.3s ease"
              >
                SELL
              </Button>
            </NextLink>
          </Flex>
        </Box>
      </Flex>

      {/* Green LED strip */}
      <Box
        position="absolute"
        bottom="0"
        width="100%"
        height="10px"
        bgColor="green.500"
        boxShadow="0 0 10px rgba(0, 255, 0, 0.5)"
        zIndex="1"
      ></Box>

      {/* Footer */}
      <Box
        position="absolute"
        bottom="0"
        width="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding={{ base: "0 20px", md: "0 50px" }}
        zIndex="2"
      >
        <Image
          src="https://raw.githubusercontent.com/Hatterdev/gicimages/refs/heads/main/rodape.png"
          alt="Logo"
          boxSize={{ base: "100px", md: "150px" }}
        />
        <Flex gap="6" color="white" fontSize="2xl">
          {/* Social Links */}
          <Link href="https://x.com/gicsports?s=21" isExternal>
            <FaTwitter size={40} />
          </Link>
          <Link
            href="https://www.instagram.com/gic_sports?igsh=eXBoZGJ4ODQ1eTdo"
            isExternal
          >
            <FaInstagram size={40} />
          </Link>
          <Link href="https://t.me/gicsportsnetwork" isExternal>
            <FaTelegram size={40} />
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
