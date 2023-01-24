import Head from 'next/head'
import Link from 'next/link'

const Home = () => (
  <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <Head>
      <title>PWA</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <h1>PWA</h1>

      <Link href="/mailer/page1">Mailer Page 1</Link>
      <Link href="/mailer/page2">Mailer Page 2</Link>
    </main>
  </div>
)

export default Home
