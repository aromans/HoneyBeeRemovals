import Head from 'next/head'
import Navbar from '../navbar'
import Footer from '../footer'
import { Box, Container, Image, Heading } from '@chakra-ui/react'

import Section from '../section'
import ImageSlider from "../ChakraCarousel";
import { SlideData } from "../SlideData";

const Main = ({ children, router }) => {
    return (
        <Box as='main' pb={8} bgColor='#E9F1F7'>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <title>Home Page</title>
            </Head>
            
            <Navbar path={router.asPath} />
            
            <Container maxW='container.md' pt={14}>
                {children}
                <Footer />
            </Container>
        </Box>
    )
}

export default Main;