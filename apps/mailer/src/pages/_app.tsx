import '../styles/globals.css'
import { AppProps } from 'next/app'
import { MailerProvider } from '../components/mailer-context'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }: AppProps) {
  const RenderComponent = Component as any
  return (
    <MailerProvider>
      <Head>
        <title>Mailer</title>
      </Head>
      <RenderComponent {...pageProps} />
    </MailerProvider>
  )
}
