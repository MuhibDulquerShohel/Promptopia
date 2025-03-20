import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

import ContextProvider from '@/context';


export const metadata = {
  title: 'Promptopia',
  description: 'Powered by Reown'
};


export default async function RootLayout({ children }) {
  

  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider >{children}</ContextProvider>
      </body>
    </html>
  );
}

