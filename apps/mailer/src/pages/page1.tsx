import Head from 'next/head'
import Link from 'next/link'
import { HelloWorld } from '../components/hello-world'
import { useRoute } from '../components/mailer-context'

const Home = () => {
  const route = useRoute()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1>PAGE 1</h1>
        <HelloWorld />
        <Link href={route('/page2')}>PAGE 2</Link>
      </main>
    </div>
  )
}

export default Home
