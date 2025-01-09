import Link from "next/link";

export default function Home() {
    return (
        <div className="md:w-[80vw] w-[95vw] h-[90vh] mx-auto flex flex-col gap-10 mt-[120px] md:mt-0 md:justify-center items-center">
            <div className="flex flex-col-reverse items-center justify-center md:flex md:flex-row">
                <div className="md:w-[40vw] w-full md:items-baseline items-center flex flex-col gap-8">
                    <p className="font-[poppins] font-[900] text-[24px] mt-10 text-center md:text-left md:text-[50px] text-yellow-400">
                            Babyaaaa I Love YOUUUU sooooo mcuhhhhh it cant even fit in this websiteeeeeee... I just wanna be withh youuuu till thee endd YARRRRRR my GULLYAAAAA sorry tulaaaa khup timee det nahiyeeee soooo : ( but I loveee YOUUUUUUUUUUU DARLINGGGGGGG
                            
                            {/* All Your Links, One Click Away – Transform Your Online Presence! */}
                    </p>
                    <Link
                        href="/generate"
                        rel="preload"
                        className="flex  gap-2 bg-[#5432c8] w-[250px] px-5 py-3 rounded-md hover:rounded-full transition-all duration-500 ease-in">
                        <p className="font-[600] ">Generate your LinkHive</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                        </svg>
                    </Link>
                </div>

                <img src="./links.PNG" className=" md:w-[32vw] w-[40vw] rounded-lg" />
            </div>
        </div>
    );
}
