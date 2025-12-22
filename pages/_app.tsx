import type { AppProps } from 'next/app';
import SiteLayout from '../src/components/SiteLayout/SiteLayout';
import { montserrat, instrumentSans } from '../src/lib/fonts';
import '../src/styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={`${montserrat.variable} ${instrumentSans.variable}`}>
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    </div>
  );
};

export default App;
