import Head from 'next/head'
import Header from '../components/Header'

const Home = () => {
  return (
    <div className='flex bg-neutral-800 text-white h-screen snap-y snap-mandatory z-0'>
      <Head>
        <title>{"Joey's Portfolio"}</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

    </div>
  )
}

export default Home
