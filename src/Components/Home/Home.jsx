import { Helmet } from "react-helmet-async";
import Header from "./Header/Header";
import WhyUseIt from "./WhyUseIt/WhyUseIt";


const Home = () => {
    return (
        <div className="bg-white">
            <Helmet>
                <title>Tasker | Home</title>
            </Helmet>
            <Header></Header>
            <div className="md:mt-10">
                <WhyUseIt></WhyUseIt>
            </div>
        </div>
    );
};

export default Home;