import Banner from "./sections/Banner";
import Nav from "./sections/Nav";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Study from "./sections/Study";

const Home = () => {
    return (
        <div className="space-y-8">
            <Nav></Nav>
            <div className="max-w-7xl px-8 mx-auto space-y-8">
                <Banner></Banner>
                <Skills></Skills>
                <Projects></Projects>
                <Study></Study>
            </div>
        </div>
    );
};

export default Home;
