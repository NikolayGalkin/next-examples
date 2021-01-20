import Head from 'next/head'
import { NextPage } from 'next'
import Header from '../components/header'
import Footer from '../components/footer'

const HomePage: NextPage = () => (
  <>
    <Head>
      <title>Home Page</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <div className="container mx-auto text-center max-width-lg">
        <form className="calculator">
          <input type="text" className="value" defaultValue="55+73" readOnly />
          <span className="num clear">c</span>
          <span className="num">/</span>
          <span className="num">*</span>
          <span className="num">7</span>
          <span className="num">8</span>
          <span className="num">9</span>
          <span className="num">-</span>
          <span className="num">4</span>
          <span className="num">5</span>
          <span className="num">6</span>
          <span className="num plus">+</span>
          <span className="num">1</span>
          <span className="num">2</span>
          <span className="num">3</span>
          <span className="num">0</span>
          <span className="num">00</span>
          <span className="num">.</span>
          <span className="num equal">=</span>
        </form>
      </div>
    </main>
  </>
)

export default HomePage
