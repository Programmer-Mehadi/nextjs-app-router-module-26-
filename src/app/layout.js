import Navbar from '@/components/shared/Navbar'
import './globals.css'
import Footer from '@/components/shared/Footer'


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <section className='min-h-[70vh]  '>
          {
            children
          }
        </section>

      </body>
    </html>
  )
}
