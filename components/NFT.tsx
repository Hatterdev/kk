import React from "react";
import { NFT } from "@thirdweb-dev/sdk";
import { 
    MARKETPLACE_ADDRESS, 
    NFT_COLLECTION_ADDRESS 
} from "../const/addresses";
import { ThirdwebNftMedia, useContract, useValidDirectListings, useValidEnglishAuctions } from "@thirdweb-dev/react";
import { Box, Flex, Skeleton, Text } from "@chakra-ui/react";

type Props = {
    nft: NFT;
};

export default function NFTComponent({ nft }: Props) {
    const { contract: marketplace, isLoading: loadingMarketplace } = useContract(MARKETPLACE_ADDRESS, "marketplace-v3");

    const { data: directListing, isLoading: loadingDirectListing } = 
        useValidDirectListings(marketplace, {
            tokenContract: NFT_COLLECTION_ADDRESS,
            tokenId: nft.metadata.id,
        });

    // Add for auction section
    const { data: auctionListing, isLoading: loadingAuction} = 
        useValidEnglishAuctions(marketplace, {
            tokenContract: NFT_COLLECTION_ADDRESS,
            tokenId: nft.metadata.id,
        });

    return (
        <Flex
            direction={"column"}
            backgroundColor={"#2D2D2D"} // Fundo escuro
            justifyContent={"center"}
            padding={"2.5"}
            borderRadius={"6px"}
            borderColor={"lightgray"}
            borderWidth={1}
            boxShadow="0 0 15px rgba(0, 255, 255, 0.8)" // Efeito de brilho
            transition="box-shadow 0.3s ease-in-out"
            _hover={{
                boxShadow: "0 0 30px rgba(0, 255, 255, 1)", // Efeito de brilho mais forte no hover
            }}
        >
            <Box
                borderRadius={"4px"}
                overflow={"hidden"}
            >
                <ThirdwebNftMedia metadata={nft.metadata} height={"100%"} width={"100%"} />
            </Box>
            <Text fontSize={"small"} color={"white"}>Token ID #{nft.metadata.id}</Text> {/* Texto claro */}
            <Text fontWeight={"bold"} color={"white"}>{nft.metadata.name}</Text> {/* Texto claro */}

            <Box>
                {loadingMarketplace || loadingDirectListing || loadingAuction ? (
                    <Skeleton></Skeleton>
                ) : directListing && directListing[0] ? (
                    <Box>
                        <Flex direction={"column"}>
                            <Text fontSize={"small"} color={"white"}>Price</Text> {/* Texto claro */}
                            <Text fontSize={"small"} color={"white"}>{`${directListing[0]?.currencyValuePerToken.displayValue} ${directListing[0]?.currencyValuePerToken.symbol}`}</Text>
                        </Flex>
                    </Box>
                ) : auctionListing && auctionListing[0] ? (
                    <Box>
                        <Flex direction={"column"}>
                            <Text fontSize={"small"} color={"white"}>Minimum Bid</Text> {/* Texto claro */}
                            <Text fontSize={"small"} color={"white"}>{`${auctionListing[0]?.minimumBidCurrencyValue.displayValue} ${auctionListing[0]?.minimumBidCurrencyValue.symbol}`}</Text>
                        </Flex>
                    </Box>
                ) : (
                    <Box>
                        <Flex direction={"column"}>
                            <Text fontSize={"small"} color={"white"}>Price</Text> {/* Texto claro */}
                            <Text fontSize={"small"} color={"white"}>Not Listed</Text> {/* Texto claro */}
                        </Flex>
                    </Box>
                )}
            </Box>
        </Flex>
    );
}
