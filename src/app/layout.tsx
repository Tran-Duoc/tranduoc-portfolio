import './globals.css'

import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import { ThemeProvider } from '@/components/theme-provider'

const inter = Poppins({
  subsets: ['latin', 'devanagari'],
  weight: ['400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'Trần Được',
  description: 'Trần Được my portfolio'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
