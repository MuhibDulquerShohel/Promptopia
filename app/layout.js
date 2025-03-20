import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Nav from "@components/Nav";
const inter = Inter({ subsets: ['latin'] });

import WCProvider from '@/wagmi';


export const metadata = {
  title: 'Promptopia',
  description: 'Powered by Reown'
};


export default async function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={inter.className}>
      <WCProvider >
        {/* <WCProvider >{children}</WCProvider> */}
        <div className="main">
          <div className="gradient"></div>
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
        </WCProvider>
      </body>
    </html>
  );
}

