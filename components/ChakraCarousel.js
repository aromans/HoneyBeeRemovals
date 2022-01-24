import { 
    Image,
    Text,
    Container,
    Box,
    Divider,
    Stack
 } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { CgBee } from 'react-icons/cg'

// If you want to use your own Selectors look up the Advancaed Story book examples
const ImageSlider = ({ slides }) => {
  return (
    <Carousel infiniteLoop autoPlay={true} showArrows={true} stopOnHover={true} interval={8000} showThumbs={false}>
      {slides.map((slide) => {
        return (
            <Container w='100%' h='100%'>
                <Image src={slide.image} height="auto" width="100%" />
                <Text align='left' fontSize={6} color='gray.500'>{slide.credit}</Text>
                <Box>
                    <Stack align='center' mt={2} direction='column'>
                        <CgBee/>
                        <Divider orientation='horizontal' mt={1} />
                        <Text align='left'> {slide.text} </Text>
                    </Stack>
                </Box>
                <Box h="30px"></Box>
            </Container>
        );
      })}
    </Carousel>
  );
};

export default ImageSlider;
