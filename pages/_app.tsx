import { Global } from '@emotion/react';
import { AppProps } from 'next/dist/shared/lib/router/router';
import Layout from '../components/Layout';
import { GlobalStyles } from '../styles/global/GlobalStyels';

function App({ Component, pageProps }: AppProps )  {
    return (
        <>
          <Layout>
            <Component {...pageProps} />
            <Global styles={GlobalStyles} />
          </Layout>
        </>
    );
};




export default App;