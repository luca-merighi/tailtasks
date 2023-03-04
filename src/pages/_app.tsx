import React from 'react'
import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <link rel="shortcut icon" href="/tailwindcss.png" type="image/x-icon" />
        <title>Tailtasks</title>
      </Head>

      <Component {...pageProps} />
    </React.Fragment>
  )
}
