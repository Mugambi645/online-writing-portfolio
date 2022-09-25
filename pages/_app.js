import '../styles/globals.css'
import Layout from '../components/Layout'
import Hero from '../components/home/Hero'
function MyApp({ Component, pageProps }) {
  return (
    <>
    <Layout>
    <Component {...pageProps}/>
    <Hero/>
    </Layout>
    </>
     )
}

export default MyApp
