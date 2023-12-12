import Banner from "./sections/Banner";
import Nav from "./sections/Nav";

const Home = () => {
    return (
        <div className="space-y-8">
            <Nav></Nav>
            <div className="max-w-7xl px-8 mx-auto">
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Home;
