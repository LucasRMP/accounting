import { useRouter } from 'next/router'
import React from 'react'

interface ContextValue {
  route?: (path: string) => string
}

const MailerContext = React.createContext<ContextValue>({})

interface MailerProviderProps {
  baseUrl?: string
}

export const useRoute = () => {
  const { route } = React.useContext(MailerContext)

  if (!route) {
    throw new Error('useRoute must be used within a MailerProvider')
  }

  return route
}

export const MailerProvider = ({
  baseUrl = '',
  children,
}: React.PropsWithChildren<MailerProviderProps>) => {
  const route = (path: string) => {
    return `${baseUrl}${path}`
  }

  return (
    <MailerContext.Provider value={{ route }}>
      {children}
    </MailerContext.Provider>
  )
}
