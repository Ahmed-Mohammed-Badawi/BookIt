import HomeComponent from "../components/Home";
import { getRooms } from "../Redux/AsyncFunctions/AllAsyncFunctions";
import { wrapper } from "../Redux/Store";

export default function Home() {
    return <HomeComponent />;
}

export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async ({ req, res }) => {
            const con = await store.dispatch(getRooms(req));
        }
);
