import React, { useState, useEffect } from "react";
import { useWallet } from "../../hooks/useWallet";
import { images } from "../../constant";

export const Overview = () => {
  const [created, setCreated] = useState(0)
  return (
   <>
   <div className="grid grid-cols-4">
        <div className="col-span-1">
        </div>
        <div className="col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-4 relative gap-8 mt-2 w-full md:w-[90%]">
            <div className="flex flex-col md:col-span-2 w-[80%] rounded-md text-white mx-6 md:mx-0">
                <div className="grid grid-cols-2 relative gap-4">
                <div className="bg-[#191717] p-6 rounded-xl text-center lg:h-44">
                    <div className="text-sm lg:text-md">
                    Artwork
                    <br />
                    Created
                    </div>
                    <div className="pt-4 text-3xl font-semibold">0</div>
                </div>
                <div className="bg-[#191717] p-6 rounded-xl text-center lg:h-44">
                    <div className="text-sm lg:text-md">
                    Revenue
                    <br />
                    Earned
                    </div>
                    <div className="pt-4 text-3xl font-semibold">0</div>
                </div>
                </div>

                <div class="grid grid-cols-2 relative gap-4 pt-4">
                <div className="bg-[#191717] p-6 rounded-xl text-center lg:h-44">
                    <div className="text-sm lg:text-md">
                    Creations
                    <br />
                    Sold
                    </div>
                    <div className="pt-4 text-3xl font-semibold">0</div>
                </div>
                <div className="bg-[#191717] p-6 rounded-xl text-center lg:h-44">
                    <span className="text-sm lg:text-md">
                    Followers
                    </span>
                    <div className="pt-4 text-3xl font-semibold">0</div>
                </div>
                </div>
            </div>

                <div className="flex flex-col md:col-span-2 -translate-x-20 w-[110%] mx-6 md:mx-0">
                    <div>
                        <div className="font-medium">About</div>
                        <div className="text-xs lg:text-xs font-light pt-6 h-20">
                        {/* {profile.bio} */}
                        </div>

                        <div className="font-medium h-10">Created</div>

                        <div className="mt-10 font-medium">Links</div>
                        {/* <div>{profile.email}</div> */}

                            <div className="flex mb-10 gap-x-4 justify-start">
                            <div className="grid grid-cols-3 gap-2 mt-2">
                            <div className="rounded-md flex justify-center items-center px-2 py-2">
                                <a
                                href="https://www.facebook.com/3six9OFFICIAL"
                                target="_blank"
                                >
                                <img
                                    alt="facebook"
                                    src={images.facebook}
                                    className="w-2.5 lg:w-2.5"
                                />
                                </a>
                            </div>
                            <div className="rounded-md flex justify-center items-center px-2">
                                <a
                                href="https://twitter.com/3six9OFFICIAL"
                                target="_blank"
                                >
                                <img
                                    alt="twitter"
                                    src={images.twitter}
                                    className="w-3.5 lg:w-5"
                                />
                                </a>
                            </div>
                            <div className="rounded-md  flex justify-center items-center">
                                <a
                                    href="https://discord.gg/86uzNjMgPK"
                                    target="_blank">
                                    <img
                                        alt="discord"
                                        src={images.discord}
                                        className="w-3.5 lg:w-5"
                                    />
                                </a >
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div> 
    </div>
   </>
  )
}
