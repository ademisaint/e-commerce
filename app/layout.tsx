import '@/app/globals.css';
import Nav from '@/components/Navbar'
import Foot from '@/components/Footer';
import { Archivo_Black } from 'next/font/google';
import { Roboto } from 'next/font/google';
import SessionWrapper from '@/components/SessionWrapper';
import { ProductProvider } from '@/context/productContext';
// import { WixClientContextProvider } from '@/context/wixContext';
// import { title } from 'process';
// import { Description } from '@mui/icons-material';

const archivoBlack = Archivo_Black({
  subsets: ['latin'],
  weight: '400',
});

const roboto = Roboto({
  subsets: [],
  weight: '400',
})

export const metadata = {
  title: 'Sainte',
  Description: 'created by saint'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SessionWrapper>
      <ProductProvider>
    {/* // <WixClientContextProvider> */}
      <html lang="en">
        
        <body className={roboto.className}>
          <div>
            <Nav/>
            <main>{children}</main>
            <Foot/>
          </div>
        </body>
        
      </html> 
      </ProductProvider>
    {/* // </WixClientContextProvider> */}
    </SessionWrapper>
  )
}