import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Header></Header>
            
            <h1>This is home page</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus autem molestias ea deleniti ullam. Repellat eum laboriosam nisi perspiciatis laborum. Quibusdam aliquid quis sint laboriosam sunt magni ipsam debitis nihil?</p>
            {
                navigation.state === 'loading' ?
                'Loading....' : <Outlet></Outlet>
            }

            <Footer></Footer>
        </div>
    );
};

export default Home;