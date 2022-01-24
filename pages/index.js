import Layout from '../lib/article'
import {
    chakra,
    Container,
    Box,
    Heading,
    Button,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Stack,
    Text,
    Divider,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea
} from '@chakra-ui/react'

import { useState, useRef } from 'react'
import Section from "../components/section"
import { CgBee } from 'react-icons/cg'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdOutlineEmojiPeople } from 'react-icons/md'
import { MdAlternateEmail } from 'react-icons/md'

import ImageSlider from "../components/ChakraCarousel";
import { SlideData } from "../components/SlideData";

const axios = require('axios');
axios.defaults.headers.post['Content-Type'] = 'application/json';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)
    const onClose = () => setIsOpen(false)
    const cancelRef = useRef()

    const [contactSuccess, setContactState] = useState(false)

    const successTitle = "Message Sent Successfully!"
    const successBody = "Thanks for reaching out! I will get back to you as soon as possible!"

    const failedTitle = "Oh no! Something went wrong!"
    const failedBody = "Looks like there is something wrong with our system! If you need to reach me sooner, please give me a call at (478) 293-8120 or email me at dougeromans@gmail.com!"

    const [name, setName] = useState('')
    const handleNameChange = (e) => setName(e.target.value)

    const [phoneNumber, setPhoneNumber] = useState('')
    const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value)

    const [email, setEmail] = useState('')
    const handleEmailChange = (e) => setEmail(e.target.value)

    const [comments, setComments] = useState('')
    const handleAddedComments = (e) => setComments(e.target.value)

    var phoneno = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    var emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const isNameError = name === ''
    const isPhoneError = !new RegExp(phoneno).test(phoneNumber)
    const isEmailError = !new RegExp(emailReg).test(email)
    const isCommentError = comments === ''

    return (
        <Layout>
            <Container>
                <Section delay={0.2}>
                    <Box mt={10}>
                        <ImageSlider slides={SlideData}/>
                    </Box>
                </Section>

                <Section delay={0.3}>
                    <Box>
                        <Heading as="h3" align='center' variant="section-title">
                            Honey Bee Removal Services
                        </Heading>
                        
                        <Box align='center'>
                            <Text textAlign='center' color='red' as='i' fontSize={10}>
                                * Services do not include the finishing work to replace sheet rock, sanding and painting, etc. 
                            </Text>
                        </Box>

                        <Stack direction='column' h='100%'>
                            <Stack direction='row' h='100%' w='100%' mt={5} mb={5}>
                                <CgBee size={25}/>
                                <Heading as="h4" size={20}>Site Survey and Cost</Heading>
                                <Divider orientation='vertical' h={{md: '150px', sm: '225px'}}/>
                                <Stack direction='column' h='100%' w='100%'>
                                    <Text>	
                                        Exterior and interior inspection to how the honeybees enter the building and where the hive is located.
                                    </Text>
                                    <Text>
                                        Preliminary assessment of how to access to the hive and what building materials (sheet rock etc.) need to be removed.
                                    </Text>
                                    <Text>
                                        Written fixed price cost for removal services.
                                    </Text>
                                </Stack>
                            </Stack>


                            <Stack direction='row' h='100%' w='100%'>
                                <CgBee size={25}/>
                                <Heading as="h4" size={20}>Bee Removal</Heading>
                                <Box w='50px'></Box>
                                <Divider orientation='vertical' h={{md: '570px', sm: '660px'}}/>
                                <Stack direction='column' h='100%' w='100%'>
                                    <Text>
                                    Preparation for removal including protective floor and wall coverings where necessary and the installation of barriers if necessary to contain bees to a small area of the building.
                                    </Text>
                                    <Text>
                                        Gain access to the area where the bees need to be removed. 
                                    </Text>
                                    <Text>
                                        Removal of the bees, honey comb, and honey. Care is taken not to injure the bees in the process so they may be relocated to a new home.
                                    </Text>
                                    <Text>
                                        Cleaning of the area where the bees were located. 
                                    </Text>
                                    <Text>
                                        Preparation of the area to prevent the bees from returning. This includes sealing of the entrance, adding insulation to fill the cavity and covering the exposed area with a plastic barrier.
                                    </Text>
                                    <Text>
                                        Removal of the protective floor and wall coverings and barriers.
                                    </Text>
                                    <Text>
                                        Cleanup of the area.
                                    </Text>
                                    <Text>
                                        Final inspection and approval of the area with the home owner.
                                    </Text>
                                    <Text>
                                        Photos of the area, bees, beehive and removal process can be provided.
                                    </Text>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Box>
                </Section>

                <Section delay={0.4}>
                    <Box>
                        <Heading as="h3" align='center' variant="section-title" mt={10} mb={2}>
                            Guarantee
                        </Heading>
                        <Stack direction='row' align='center' h='100px' p={4} w='100%'>
                            <CgBee size={50}/>
                            <Divider orientation='vertical' mt={1} />
                            <Text mb={5} align='left'>
                                The surrounding area will be left clean and free of damage.
                            </Text>

                            <CgBee size={50}/>
                            <Divider orientation='vertical' mt={1} />
                            <Text mb={5} align='left'>
                            The area where the bees were located and the area four feet on either side will not be occupied by another bee colony.
                            </Text>
                        </Stack>
                    </Box>
                </Section>

                <Section delay={0.5}>
                    <Box>
                        <Heading as="h3" align='center' variant="section-title" mt={10} mb={2}>
                            Contact
                        </Heading>

                        <Box fontSize="sm">
                            <chakra.span>I am happy to answer any questions you may have. To contact me - fill out the form below, give me a call at </chakra.span> 
                            <chakra.span color="blue" fontStyle='italic'>(478) 293-8120 </chakra.span>
                            <chakra.span>or email me directly at </chakra.span>
                            <chakra.span color="blue" fontStyle='italic'>dougeromans@gmail.com</chakra.span>
                            <chakra.span>!</chakra.span>
                        </Box>

                        <FormControl mt={5} mb={2} isInvalid={isNameError}>
                            <FormLabel htmlFor='name'>Name</FormLabel>
                            <InputGroup>
                                <InputLeftElement
                                pointerEvents='none'
                                children={<MdOutlineEmojiPeople color='gray.300' />}
                                />
                                <Input
                                    id='name'
                                    type='text'
                                    value={name}
                                    onChange={handleNameChange}
                                />
                            </InputGroup>
                            {!isNameError ? (
                                <FormHelperText>
                                </FormHelperText>
                            ): (
                                <FormErrorMessage>First Name is required.</FormErrorMessage>
                            )}
                        </FormControl>

                        <FormControl mb={2} isInvalid={isPhoneError}>
                            <FormLabel htmlFor='phone'>Phone</FormLabel>
                            
                            <InputGroup>
                                <InputLeftElement
                                pointerEvents='none'
                                children={<FaPhoneAlt color='gray.300' />}
                                />
                                <Input 
                                    type='phone'           
                                    placeholder='Phone number'
                                    value={phoneNumber}
                                    onChange={handlePhoneNumberChange}
                                />
                            </InputGroup>
                            {!isPhoneError ? (
                                <FormHelperText>
                                </FormHelperText>
                            ): (
                                <FormErrorMessage>Phone Number is required.</FormErrorMessage>
                            )}
                        </FormControl>

                        <FormControl mb={2} isInvalid={isEmailError}>
                            <FormLabel htmlFor='email'>Email</FormLabel>
                            <InputGroup>
                                <InputLeftElement 
                                    pointerEvents='none'
                                    children={<MdAlternateEmail color='gray.300'/>}
                                />
                                <Input
                                    id='email'
                                    type='email'
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                            </InputGroup>
                            {!isEmailError ? (
                                <FormHelperText>
                                </FormHelperText>
                            ) : (
                                <FormErrorMessage>Email is required.</FormErrorMessage>
                            )}
                        </FormControl>

                        <FormControl mb={2} isInvalid={isCommentError}>
                            <FormLabel htmlFor='comments'>Comments</FormLabel>
                            <Textarea
                                h='100px'
                                id='comment'
                                type='text'
                                value={comments}
                                onChange={handleAddedComments}
                            />
                            {!isCommentError ? (
                                <FormHelperText>
                                </FormHelperText>
                            ) : (
                                <FormErrorMessage>Comments is required.</FormErrorMessage>
                            )}
                        </FormControl>

                        <Button
                            mt={4}
                            colorScheme='teal'
                            type='submit'
                            onClick={() => {
                                axios.post('https://formsubmit.co/ajax/dougeromans@gmail.com', {
                                    _subject: `New Client Request - ${name}`,
                                    name: name,
                                    email: email,
                                    tel: phoneNumber,
                                    message: comments
                                })
                                    .then(response => {
                                        console.log(response.data.success)
                                        setContactState(response.data.success == 'true')
                                        setIsOpen(true)
                                    })
                                    .catch(error => {
                                        console.log(error)
                                    });
                            }}
                        >
                            Submit
                        </Button>
                    </Box>
                </Section>

                <AlertDialog
                    isOpen={isOpen}
                    leastDestructiveRef={cancelRef}
                    onClose={onClose}
                >
                    <AlertDialogOverlay>
                        <AlertDialogContent>
                            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                                { contactSuccess ? successTitle : failedTitle }
                            </AlertDialogHeader>

                            <AlertDialogBody>
                                { contactSuccess ? successBody : failedBody }
                            </AlertDialogBody>

                            <AlertDialogFooter>
                                <Button align='center' ref={cancelRef} onClick={onClose}>
                                    Close
                                </Button>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialogOverlay>
                </AlertDialog>
            </Container>
        </Layout>
    )
}

export default Home;