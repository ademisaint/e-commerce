import '@/app/globals.css';
import Nav from '@/components/navbar'
import Foot from '@/components/footer';
import { Archivo_Black } from 'next/font/google';
import { Roboto } from 'next/font/google';

const archivoBlack = Archivo_Black({
  subsets: ['latin'],
  weight: '400',
});

const roboto = Roboto({
  subsets: [],
  weight: '400',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={roboto.className}>
        <div>
          <Nav/>
            {children}
          <Foot/>
        </div>
      </body>
      
    </html>
  )
}