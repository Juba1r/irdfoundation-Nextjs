import Link from "next/link";

export const Navbar = () => {
    return (
        <nav className="bg-neutral-800 text-neutral-400 p-4 sm:p-5 md:flex md:justify-between md:items-center">
            <div className="container  flex flex-col md:flex-row justify-between items-center md:items-center">
                <div className="ml-16">
                    <a href="" className="text-xl font-bold">
                        হাদিস সমূহ
                    </a>
                    
                    <p className="text-xs font-bold">হাদিস পড়ুন শিখুন এবং জানুন</p>
                </div>
                <div className="md:flex md:items-center md:space-x-4 relative pr-4">
                    <input type="text" placeholder="Search Hadith" className="px-3 py-2 pl-10 rounded-lg bg-transparent outline outline-1 outline-offset-1"/>
                    <img src="/search-icon.png" alt="Search" className="absolute inset-y-1 left-0 ml-3 mt-2 h-4 w-4" style={{ filter: 'invert(100%)' }}/>
                </div>
                <div className="absolute right-12">
                    <button className="bg-green-500 px-5 py-2 rounded-md text-sm text-white">সাপোর্ট করুন</button>
                </div> 
            </div>
        </nav>
    );
};
