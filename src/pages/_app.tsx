import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { ModalContextProvider } from '../components/global/context/ModalContextProvider';
import GlobalStyle from '../styles/Global';
import theme from '../styles/theme';

interface CustomAppProps extends AppProps {}

const CustomApp: React.FC<CustomAppProps> = ({ Component, pageProps }) => {
  return (
    <ModalContextProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </ModalContextProvider>
  );
};

export default CustomApp;
