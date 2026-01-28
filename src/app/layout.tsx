import type { Metadata } from 'next';
import { Inter, Montserrat, Playfair_Display } from 'next/font/google';
import HeaderContainer from '@/src/components/HeaderContainer/HeaderContainer';
import { Footer } from '../components/Footer/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-montserrat',
  display: 'swap',
});

const cardo = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '600', '700'],
  variable: '--font-cardo',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Olena Demianenko | Portfolio',
  description: 'Developer Portfolio - Designed & Built by Olena Demianenko',
  icons: {
    icon: '/icon.svg', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${cardo.variable} ${montserrat.variable} antialiased`}
      >
        <HeaderContainer />
        {children}
        <Footer />
      </body>
    </html>
  );
}
