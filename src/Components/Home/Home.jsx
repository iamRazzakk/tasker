import Header from "./Header/Header";
import WhyUseIt from "./WhyUseIt/WhyUseIt";


const Home = () => {
    return (
        <div className="bg-white">
            <Header></Header>
            <div className="md:mt-10">
            <WhyUseIt></WhyUseIt>
            </div>
        </div>
    );
};

export default Home;