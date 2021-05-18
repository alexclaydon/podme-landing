import 'tailwindcss/tailwind.css'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mt-[88px]">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
