import "../styles/globals.css";
import "../styles/reset.css";
import "../public/fontawesome-free-5.15.4-web/css/all.min.css";
import { Provider } from "react-redux";
import { AppProps } from "next/app";
import { store } from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
