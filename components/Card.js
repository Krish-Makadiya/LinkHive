"use client";

import Link from "next/link";
import React from "react";

const Card = ({ data }) => {
    console.log(data);
    return (
        <Link href={data.url} target="blank">
            <div className="bg-black mt-5 text-center py-4 rounded-full text-[18px] font-[600] border-[0px] border-yellow-400 transition-all duration-500 ease-in-out hover:border-2 hover:scale-105 cursor-pointer">
                <p>{data.urlName}</p>
            </div>
        </Link>
    );
};

export default Card;
