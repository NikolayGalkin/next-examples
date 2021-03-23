import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'

const HomePage: NextPage = () => (
  <main className="flex items-center justify-center min-h-screen">
    <Head>
      <title>Home Page</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    Home Page
  </main>
)

export default HomePage
