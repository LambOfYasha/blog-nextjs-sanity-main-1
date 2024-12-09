import Header from '../components/Header'
import * as Navigation from '../styles/styles'
import Providers from '../components/Providers'
import '../styles/w3css.css'
import '../styles/globals.css'


export const metadata = {
  title: 'AntiBlasphemy Ministries',
  description: 'A Christian Website',
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple.png?v=4'],
    shortcut: ['/apple.png']
  }
} 



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html  lang="en">                     
<body className="w3-mobile w3-black" style={{minHeight:"100vh"}}>
                  <Providers> 
  
             {children}  
          </Providers>
          </body>
    </html>
  )
}
