import Banner from "../components/Banner";
import Category from "../components/Category";
import Navbar from "../components/Navbar";


const Home = () => {
    return (
        <div className="">
            <Banner />
            <div className="max-w-7xl mx-auto">
                <Category />
            </div>
        </div>
    );
};

export default Home;