import '../styles/global.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}
