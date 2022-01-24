import { ChakraProvider } from "@chakra-ui/provider";
import { ColorModeScript } from "@chakra-ui/react";
import Layout from '../components/layouts/main'
import { AnimatePresence } from "framer-motion";

const Website = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider>
            <Layout router={router}>
                <AnimatePresence exitBeforeEnter initial={true}>
                    <Component {...pageProps} key={router.route}/>
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    )
}

export default Website