import { Avatar, Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import NextLink from 'next/link';

export function Navbar() {
    const address = useAddress();

    return (
        <Box 
            maxW={"1200px"} 
            m={"auto"} 
            py={"1px"} 
            px={"40px"} 
            position="fixed" 
            top={0} 
            left={0} 
            right={0} 
            zIndex={1000} 
            backdropFilter="blur(10px)" // Efeito de blur
            bgColor="rgba(0, 0, 0, 0.5)" // Fundo semi-transparente
            boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)" // Sombra para destaque
        >
            <Flex justifyContent={"space-between"} alignItems={"center"}>
                <Link as={NextLink} href='/'>
                    <Heading 
                        fontFamily="'Roboto', sans-serif" 
                        color="white" 
                        textAlign="center" 
                        fontSize="xl" // Reduzido para 'xl'
                        _hover={{ textDecoration: "none", color: "green.400" }} // Efeito hover no título
                        animation="pulse 1.5s infinite" // Animação de "pulsar"
                    >
                        Gic Fan Zone
                    </Heading>
                </Link>
                <Flex direction={"row"}>
                    <Link as={NextLink} href='/buy' mx={2.5}>
                        <Text color="white" _hover={{ color: "green.400" }}>Buy</Text>
                    </Link>
                    <Link as={NextLink} href='/sell' mx={2.5}>
                        <Text color="white" _hover={{ color: "green.400" }}>Sell</Text>
                    </Link>
                </Flex>
                <Flex dir={"row"} alignItems={"center"}>
                    <ConnectWallet />
                    {address && (
                        <Link as={NextLink} href={`/profile/${address}`}>
                            <Avatar src='https://bit.ly/broken-link' ml={"20px"} />
                        </Link>
                    )}
                </Flex>
            </Flex>
            
            {/* Fio de LED na parte inferior */}
            <Box 
                position="absolute" 
                bottom="0" 
                width="100%" 
                height="5px" 
                bgColor="green.500" 
                boxShadow="0 0 15px rgba(0, 255, 0, 0.6)" 
            />
        </Box>
    )
};
