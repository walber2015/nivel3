import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import Head from 'next/head'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps){
    return (
        <>
        <Head>
            <meta name='viewport' content='with=device-width, initial-scale=1'/>
        </Head>
        <Component {...pageProps}/>
        </>
    )
}

export default MyApp