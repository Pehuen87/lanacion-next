// These styles apply to every route in the application
import Header from '../components/Header'
import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <head>
        <title>La Nacion Challenge Next.js</title>
      </head>
      <body className='bg-gray-200'>
        <Header />
        {children}
      </body>
    </html>
  )
}