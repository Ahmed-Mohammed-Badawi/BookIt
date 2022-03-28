import "../styles/globals.css";
import Layout from "../components/layout/Layout";

// Redux
import { wrapper } from "../Redux/Store";

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default wrapper.withRedux(MyApp);
