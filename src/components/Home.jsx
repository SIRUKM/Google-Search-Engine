import Logo from "../assets/google-logo.png";
import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput";
import Footer from "./Footer";
const Home = () => {
    return <div className="flex h-[100vh] flex-col">
        <HomeHeader />
        <main className="flex-grow flex flex-col items-center justify-center">
            <div className="flex flex-col items-center"></div>
            <img src={Logo} alt="Google logo" className="w-[172px] md:w[272px] mb-8" />
            <SearchInput />
            <div className="flex items-center mt-8 space-y-2 gap-2 text-[#3c4043]">
                <button className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2">
                    Google Search
                </button>
                <button className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2">
                    I'm Feeling Lucky
                </button>
            </div>
        </main>
        <Footer />
    </div>;
};

export default Home;
