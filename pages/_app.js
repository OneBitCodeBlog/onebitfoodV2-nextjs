import Head from 'next/head';
import '../styles/globals.scss'
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>OneBitFood V2</title>
        <link ref="icon" href="/favicon.icon" />
      </Head>

      <main>
        <Header />
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
