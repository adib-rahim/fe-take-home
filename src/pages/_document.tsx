import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import Colortheme from './Colortheme'



export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <ColorModeScript initialColorMode={Colortheme.config.initialColorMode}  />

          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
