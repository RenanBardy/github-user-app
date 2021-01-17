import { FC } from 'react'
import Head from 'next/head'
import Search from 'containers/Search'
import Footer from 'components/Footer'

const Home: FC = () => {
  return (
    <main>
      <Head>
        <title>Github user app</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="Content-Security-Policy" content={process.env.CSP} />
      </Head>
      <Search />
      <Footer />
    </main>
  )
}

export default Home
