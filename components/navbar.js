import NextLink from 'next/link'
import {
    Box,
    Container,
    Link,
    Flex,
    Heading
} from '@chakra-ui/react'
import { GiBeehive } from "react-icons/gi"

const Navbar = props => {
    const { path } = props

    return (
        <Box
            position='fixed'
            as='nav'
            w='100%'
            bg={'#ffcb47cc'}
            style={{ backdropFilter: 'blur(10px)' }}
            zIndex={1}
            {...props}
        >
            <Container
                display='flex'
                p={2}
                maxW='container.md'
                wrap='wrap'
                align='center'
                justify='space-between'
            >
                <Flex align='center' mr={5}>
                    <GiBeehive size={30} />
                    <Heading as='h1' size='md' letterSpacing={'tighter'}>
                        <NextLink href={'/'} passHref>
                            Honey Bee Removals
                        </NextLink>
                    </Heading>
                </Flex>
            </Container>
        </Box>
    )
}

export default Navbar