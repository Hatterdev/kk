import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import { Navbar } from "../components/Navbar";
import { Binance } from "@thirdweb-dev/chains";

// Esta é a rede que seu app vai utilizar (no seu caso, BSC)
const activeChain = "bsc"; 

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={Binance}
      clientId={process.env.THIRDWEB_API_KEY} // Usando a chave da API do .env.local
    >
      <ChakraProvider>
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
