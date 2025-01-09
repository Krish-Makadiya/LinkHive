import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <div className="h-[10vh]">
            <div className="bg-[#5432c8] md:w-[80vw] w-[90vw] mx-auto mt-[32px] rounded-[60px] flex justify-between">
                <div className="flex items-center md:ml-2 ml-1">
                    <Image
                        src="/linkhive.png"
                        alt="Description of the image"
                        width={70}
                        height={70}
                        priority={true}
                    />
                    <Link
                        rel="preload"
                        href="/"
                        className="text-[#eae2dd] md:ml-[-8px] ml-[-16px] md:text-[22px] text-[20px] font-[900] font-[poppins]">
                        LinkHive.
                    </Link>
                </div>

                <div className="flex items-center gap-4 md:gap-8 md:mr-10 mr-6">
                    <Link
                        rel="preload"
                        href="/about"
                        className="text-sm md:text-[14px] font-semibold hover:text-black transition-colors">
                        About Us
                    </Link>
                    <Link
                        rel="preload"
                        href="https://github.com/Krish-Makadiya/LinkHive"
                        target="_blank"
                        className="px-3 md:px-5 py-2 md:py-3 text-[14px] md:text-sm font-bold bg-[#0e0e0e] text-[#eae2dd] rounded-md flex items-center gap-2 transition-all duration-500 ease-in-out hover:rounded-full">
                        <span>GitHub</span>
                        <svg
                            className="w-6 h-6 text-yellow-400 fill-current stroke-black stroke-2"
                            viewBox="0 0 24 24">
                            <path d="M12 .587l3.668 7.431 8.332 1.21-6.001 5.85 1.416 8.265L12 19.127l-7.417 3.89 1.416-8.265-6.001-5.85 8.332-1.21z" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
