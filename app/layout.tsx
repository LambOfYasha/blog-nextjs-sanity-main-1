import { HeaderDT } from '../components/Header'
import Providers from '../components/Providers'
import '../styles/w3css.css'

export const metadata = {
  title: 'AB Studios',
  description: 'A Christian Multimedia Company',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <HeaderDT/>
          {children}</Providers></body>
    </html>
  )
}
