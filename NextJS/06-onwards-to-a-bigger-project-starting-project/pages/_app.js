import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
} //this is the actual page content which changes on navigation

export default MyApp
