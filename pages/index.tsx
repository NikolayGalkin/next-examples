import Head from 'next/head'
import { NextPage } from 'next'
import Header from '../components/header'
import Footer from '../components/footer'

const HomePage: NextPage = () => (
  <>
    <Head>
      <title>Гостевой дом DOM Yalta</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="container p-12 mx-auto text-center max-width-lg">
      <Header>Header</Header>
      <main>Main</main>
      <Footer>Footer</Footer>
    </div>
  </>
)

export default HomePage
