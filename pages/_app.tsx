import type { AppProps } from 'next/app';
import '../scss/global.scss';
import 'semantic-ui-css/semantic.min.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};
export default MyApp;
