import { ColorModeScript } from "@chakra-ui/react"
import { ColorModeProvider, ThemeProvider } from "@chakra-ui/react"
import NextDocument, { Html, Head, Main, NextScript } from "next/document"
import theme from "../lib/theme"

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          {/* 👇 Here's the script */}
          <ThemeProvider theme={theme}>
                <ColorModeProvider options={{useSystsemColorMode: true}} />
                <Main />
                <NextScript />
          </ThemeProvider>
        </body>
      </Html>
    )
  }
}