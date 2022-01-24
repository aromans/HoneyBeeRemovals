import NextLink from 'next/link'
import {
    Box,
    Container,
    Link,
    Flex,
    Heading,
    Stack,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/react'
import { GiBeehive } from "react-icons/gi"

const NavItem = ({ href, path, _target, children, ...props }) => {
    const active = path === href

    return (
        <NextLink href={href} passHref>
            <Link
                p={2}
                bg={active ? 'greenCrayola' : undefined}
                _target={_target}
                {...props}
            >
               {children} 
            </Link>
        </NextLink>
    )
}

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

                {/* <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems='center'
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                >
                    <NavItem href='/' path={path}>
                        Contact
                    </NavItem>
                </Stack>

                <Box flex={1} align='right'>
                    <Box ml={2} mr={3} display={{ base: 'inline-block', md: 'none' }}>
                        <Menu isLazy id='navbar-menu'>
                            <MenuButton 
                                color='blue'
                                as={IconButton}
                                icon={HamburgerIcon}
                                aria-label='Options'
                            />
                            <MenuList>
                                <NextLink href="/" passHref>
                                    <MenuItem as={Link}>About</MenuItem>
                                </NextLink>
                                <NextLink href="/" passHref>
                                    <MenuItem as={Link}>Contact</MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box> */}
            </Container>
        </Box>
    )




    //         </Container>
    //     </Box>
    // )
}

export default Navbar