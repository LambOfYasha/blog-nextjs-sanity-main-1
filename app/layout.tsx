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
      <body>{children}</body>
    </html>
  )
}
