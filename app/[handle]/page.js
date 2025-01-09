import Card from "@/components/Card";
import clientPromise from "@/lib/mongodb";
import { redirect } from "next/navigation";
import React from "react";

const page = async ({ params }) => {
    const accountHandle = (await params).handle;

    const client = await clientPromise;
    const db = client.db("LinkHive");
    const collection = db.collection("Links");

    const doc = await collection.findOne({ usernameHandle: accountHandle });

    if (doc) {
        return (
            <div className="md:w-[50vw] w-[90vw] mx-auto mt-10">
                <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                    <img
                        src="./avtaar.png"
                        alt=""
                        height={160}
                        width={160}
                        className="bg-[#5432c8] rounded-full"
                    />

                    <div className="flex flex-col gap-3 ">
                        <p className="md:text-[40px] text-[28px] text-center md:text-left font-bold">
                            {doc.usernameHandle}
                        </p>
                        <div>
                            <p className="text-gray-500">Description:</p>
                            <p className="text-gray-300 text-[14px]">
                                {doc.description}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="md:w-[70%] mx-auto my-12">
                    {doc.links.map((link, index) => {
                        return (
                            <Card key={index} data={link}/>
                        );
                    })}
                </div>
            </div>
        );
    }

    return (
        <div>
            <div>URL not found</div>
        </div>
    );
};

export default page;
