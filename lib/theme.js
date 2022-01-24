import { extendTheme } from '@chakra-ui/react'

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 4,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      },
      'section-show': {
        fontSize:18,
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode("gray.800", "whiteAlpha.900")(props),
      textUnderlineOffset: 2
    })
  }
}

const config = {
    initialColorMode: "light",
    useSystemColorMode: true,
}

const theme = extendTheme({ config, components })

export default theme