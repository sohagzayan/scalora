import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'
import { dark } from '@clerk/themes'
import Navigation from '@/components/site/navigation'
import { Footer } from '@/components/common/Footer/Footer'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider
      appearance={{ baseTheme: dark }}>
      <Navigation />
      {children}
      <Footer />
    </ClerkProvider>
  )
}

export default Layout
