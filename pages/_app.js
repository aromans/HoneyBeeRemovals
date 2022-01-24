import { ChakraProvider } from "@chakra-ui/provider";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "@chakra-ui/react";

import Layout from "../components/layouts/main"

import theme from '../lib/theme'

const Website = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider>
            <AnimatePresence exitBeforeEnter initial={true}>
                <ThemeProvider theme={theme}>
                    <Layout router={router}>
                        <Component {...pageProps} key={router.route}/>
                    </Layout>
                </ThemeProvider>
            </AnimatePresence>
        </ChakraProvider>
    )
}

export default Website