import Head from 'next/head'
import FourOhFour from '../components/FourOhFour/FourOhFour'

export default function Home() {
  return (
    <>
      <Head>
        <title>Not Found | Lush</title>
        <meta name="description" content="Not Found | Lush" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FourOhFour />
    </>
  )
}
