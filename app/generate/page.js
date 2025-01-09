"use client";

import { useState } from "react";

const page = () => {
    const [formData, setFormData] = useState({
        usernameHandle: "",
        links: [{ urlName: "", url: "" }],
        description: "",
    });

    const submitHandler = async (e) => {
        e.preventDefault();

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify(formData);

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };

        fetch(`${process.env.NEXT_PUBLIC_HOST}/api/add`, requestOptions)
            .then((response) => response.text())
            .then((result) => {
                setFormData({
                    usernameHandle: "",
                    links: [{ urlName: "", url: "" }],
                    description: "",
                });
                console.log("1", formData.usernameHandle);
                console.log("2");
                window.location.href = `http://localhost:3000/${formData.usernameHandle}`;
            })
            .catch((error) => console.error(error));
    };

    const addLinkHandler = (e) => {
        e.preventDefault();
        setFormData((prevData) => ({
            ...prevData,
            links: prevData.links.concat([{ urlName: "", url: "" }]),
        }));
    };

    const removeLinkHandler = (e) => {
        e.preventDefault();
        if (formData.links.length > 1) {
            setFormData((prevData) => ({
                ...prevData,
                links: prevData.links.slice(0, -1),
            }));
        }
    };

    return (
        <div className="h-[70vh] w-[100vw] flex flex-col items-center md:mt-10 mt-16">
            <p className="w-[90%] md:w-[40%] text-center md:text-[30px] text-[24px] font-[600]">
                Unleash your creativity and connect the world with your{" "}
                <span className="text-yellow-400">unique</span> links! now!
            </p>

            <form
                className="md:px-10 md:w-[40%] w-[90%] rounded shadow-md"
                onSubmit={submitHandler}>
                <div className="mb-4 flex flex-col gap-[2px]">
                    <p className="text-[18px]">Step:1</p>
                    <input
                        type="text"
                        value={formData.usernameHandle}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                usernameHandle: e.target.value.replace(
                                    /\s/g,
                                    ""
                                ),
                            })
                        }
                        className="rounded-[8px] p-2 w-full px-3 py-[10px] text-[#0e0e0e]"
                        placeholder="Enter Username Handle"
                        required
                    />
                </div>

                <div className="mb-4 flex flex-col gap-[2px]">
                    <p className="text-[18px]">Step:2</p>
                    {formData.links.map((item, index) => {
                        return (
                            <div key={index} className="flex space-x-2 mb-2">
                                <input
                                    type="text"
                                    value={item.urlName}
                                    onChange={(e) => {
                                        const newLinks = [...formData.links];
                                        newLinks[index].urlName =
                                            e.target.value;
                                        setFormData({
                                            ...formData,
                                            links: newLinks,
                                        });
                                    }}
                                    className="rounded-[8px] p-2 w-full px-3 py-[10px] text-[#0e0e0e]"
                                    placeholder="Enter URL Name"
                                />
                                <input
                                    type="text"
                                    value={item.url}
                                    onChange={(e) => {
                                        const newLinks = [...formData.links];
                                        newLinks[index].url = e.target.value;
                                        setFormData({
                                            ...formData,
                                            links: newLinks,
                                        });
                                    }}
                                    className="rounded-[8px] p-2 w-full px-3 py-[10px] text-[#0e0e0e]"
                                    placeholder="Enter URL"
                                />
                            </div>
                        );
                    })}
                    <div className="flex gap-2">
                        <button
                            onClick={addLinkHandler}
                            className="bg-[#5432c8] text-white w-[50%] rounded-md px-5 py-3 flex items-center justify-center transition-all transform duration-500 ease-in hover:rounded-full">
                            <p className="font-[600] text-[14px]">Add Link</p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 ml-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="3">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4v16m8-8H4"
                                />
                            </svg>
                        </button>

                        <button
                            onClick={removeLinkHandler}
                            className="bg-[#5432c8] text-white w-[50%] rounded-md px-5 py-3 flex items-center justify-center transition-all transform duration-500 ease-in hover:rounded-full">
                            <p className="font-[600] text-[14px]">
                                Remove Link
                            </p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 30"
                                fill="white">
                                <path d="M 13 3 A 1.0001 1.0001 0 0 0 11.986328 4 L 6 4 A 1.0001 1.0001 0 1 0 6 6 L 24 6 A 1.0001 1.0001 0 1 0 24 4 L 18.013672 4 A 1.0001 1.0001 0 0 0 17 3 L 13 3 z M 6 8 L 6 24 C 6 25.105 6.895 26 8 26 L 22 26 C 23.105 26 24 25.105 24 24 L 24 8 L 6 8 z"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="mb-4 flex flex-col gap-[2px]">
                    <p className="text-[18px]">Step:3</p>
                    <textarea
                        value={formData.description}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                description: e.target.value,
                            })
                        }
                        className="rounded-[8px] p-2 w-full px-3 py-[10px] text-[#0e0e0e]"
                        placeholder="Enter Description"
                        required
                        rows={3}
                        cols={30}
                    />
                </div>

                <button
                    type="submit"
                    className="bg-yellow-400 w-[100%] text-[#0e0e0e] rounded-md py-[10px] transition-all transform duration-500 ease-in hover:rounded-full mb-20">
                    <p className="text-[18px] font-[500]">Create LinkHive</p>
                </button>
            </form>
        </div>
    );
};

export default page;
