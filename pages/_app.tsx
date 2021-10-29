import "../styles/globals.css";
import "../styles/reset.css";
import "../styles/globals.css";
import "../public/fontawesome-free-5.15.4-web/css/all.min.css";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
