import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="min-h-[calc(100vh-116px)] flex justify-center items-center flex-col gap-8">
            <h1 className="text-5xl font-bold">Welcome to <span
                className="bg-gradient-to-r bg-300% from-primary via-blue-500 to-secondary text-transparent bg-clip-text animate-gradient"
            >ByteBlaze</span></h1>
            <p className="w-[32rem] mx-auto text-center">ByteBlaze is the bridge between the complex world of technology and the curious minds eager to understand it.</p>
            <div className="space-x-6">
                <Link to='blogs' className="relative px-5 py-2 font-medium text-white group">
                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-blue-500 group-hover:bg-pink-700 group-hover:skew-x-12"></span>
                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-blue-700 group-hover:bg-pink-500 group-hover:-skew-x-12"></span>
                    <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-blue-600 -rotate-12"></span>
                    <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-pink-400 -rotate-12"></span>
                    <span className="relative">Read Blogs</span>
                </Link>
                <Link to='bookmarks' className="relative px-5 py-2 font-medium text-white group">
                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-blue-500 group-hover:bg-pink-700 group-hover:skew-x-12"></span>
                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-blue-700 group-hover:bg-pink-500 group-hover:-skew-x-12"></span>
                    <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-blue-600 -rotate-12"></span>
                    <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-pink-400 -rotate-12"></span>
                    <span className="relative">Bookmarks</span>
                </Link>
            </div>
        </div>
    );
};

export default Home;