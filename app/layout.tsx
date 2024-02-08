import Footer from '../components/Footer'
import { HeaderDT } from '../components/Header'
import Providers from '../components/Providers'
import '../styles/w3css.css'
export const metadata = {
  title: 'AB Studios',
  description: 'A Christian Fictional Multimedia Company',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html  lang="en">
      <body className='w3-padding-16' style={{minHeight:"100vh"}}>
        <Providers>
          <HeaderDT type={undefined}/>
          {children}</Providers>
          <Footer settings="w3-center w3-white w3-border w3-border-black" />
          </body>
    </html>
  )
}
