import { GeistSans } from "geist/font/sans";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={GeistSans.className}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
