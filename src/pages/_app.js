import '@/styles/globals.css';
import { Merriweather } from 'next/font/google';
import { AppContextProvider } from '@/contexts/AppContext';

const merriweather = Merriweather({ subsets: ['latin'], weight: ['300','400','700','900'] });

export default function App({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <main className={`${merriweather.className} bg-black`}>
        <Component {...pageProps} />
      </main>
    </AppContextProvider>
  );
}