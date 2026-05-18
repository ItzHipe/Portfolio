import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head>
        <meta name="theme-color" content="#080808" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#f1f5f9" media="(prefers-color-scheme: light)" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
