import type { Metadata } from 'next'
import { Saira } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Wrapper } from './wrapper'

const saira = Saira({ subsets: ['latin'], weight: ['400', '600'], variable: '--font-saira' })
export const metadata: Metadata = {
  title: 'Capputeeno',
  description: 'Rocketseat Challenge using NextJS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Wrapper>
        <body className={`${saira.className} font-normal text-gray-400`}>
          <Header />
          {children}
        </body>
      </Wrapper>
    </html>
  )
}
