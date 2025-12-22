import { Html, Head, Main, NextScript } from 'next/document';
import { montserrat, instrumentSans } from '../src/lib/fonts';

const Document = () => {
  return (
    <Html className={`${montserrat.variable} ${instrumentSans.variable}`}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
