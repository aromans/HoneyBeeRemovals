import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const lightColor = '#253b73' 
//'#D0F4EA'
const darkColor = '#253b73'

const styles = {
    global: props => ({
      body: {
        color: mode(lightColor, darkColor)(props),
        bg: mode(lightColor, darkColor)(props) 
      }
    }
  )
}

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

const colors = {
    greenCrayola: '#F06449'
}

const config = {
    initialColorMode: "dark"
}

const theme = extendTheme({ config, styles, components, colors })

export default theme