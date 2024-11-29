import React from "react";
import { Container, Heading, Text, Box } from "@chakra-ui/react";
import NFTGrid from "../components/NFTGrid";
import { NFT_COLLECTION_ADDRESS } from "../const/addresses";
import { useContract, useNFTs } from "@thirdweb-dev/react";

export default function Buy() {
    const { contract } = useContract(NFT_COLLECTION_ADDRESS);
    const { data, isLoading } = useNFTs(contract);

    return (
        <Container 
            maxW={"1200px"} 
            p={5} 
            display="flex" 
            flexDirection="column" 
            alignItems="center" 
            justifyContent="center" 
            minH="315vh"
        >
            {/* Heading and Text */}
            <Heading fontFamily="'Roboto', sans-serif" textAlign="center" mb={4}>
                Buy NFTs
            </Heading>
            <Text fontFamily="'Roboto', sans-serif" textAlign="center" mb={8}>
                Browse and buy NFTs from this collection.
            </Text>

            {/* NFT Grid */}
            <NFTGrid 
                isLoading={isLoading} 
                data={data} 
                emptyText={"No NFTs found"} 
            />
            
            {/* LED Strip */}
            <Box 
                position="absolute" 
                bottom="0" 
                width="100%" 
                height="5px" 
                bgColor="green.500" 
                boxShadow="0 0 10px rgba(0, 255, 0, 0.5)" 
            ></Box>
        </Container>
    )
};
