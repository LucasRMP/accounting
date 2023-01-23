import '../styles/globals.css'
import { AppProps } from 'next/app'
import { MailerProvider } from 'mailer/src/components/mailer-context'

export default function MyApp({ Component, pageProps }: AppProps) {
  const RenderComponent = Component as any
  return (
    <MailerProvider baseUrl="/mailer">
      <RenderComponent {...pageProps} />
    </MailerProvider>
  )
}
