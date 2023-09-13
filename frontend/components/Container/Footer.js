import React from "react";
import { images } from "../../constant";
import {
  BsTwitter,
  BsDiscord,
  BsInstagram,
  BsFacebook,
  BsLinkedin,
  BsTelegram,
} from "react-icons/bs";

import { SiTiktok, SiMedium } from "react-icons/si";

function Footer() {
  return (
    <footer>
    <div className='grid grid-cols-4 border-t-2 border-t-[#393D5E] py-10'>
        <div className='col-span-4 md:col-span-2 px-4 lg:w-[500px]'>
                <div className='text-center text-xs lg:text-sm'>Stay in the loop</div>
                <div className='text-[10px] lg:text-xs font-light'>Join our mailing list to get in the updates for latest releases, drop,
                    auctions, tricks and tips on navigating 3six9 marketplace.
                </div>
                <div className='flex gap-x-2 pt-4'>
                    <input
                        type="search"
                        name="search-form"
                        id="search-form"
                        className="bg-white-100 h-10 w-[80%] rounded-md text-[10px] lg:text-xs text-black"
                        placeholder="Your email address"
                        style={{ padding:"20px"}}
                    />
                    <button className='bg-red-600 font-light text-[10px] lg:text-xs'>Sign up</button>                               
                </div>
        </div>

        <div className='col-md:col-span-1 w-[0%]'></div>

        <div className='col-span-4 md:col-span-1 w-[250px] lg:w-[360px] translate-x-10 lg:-translate-x-10 pt-10 md:pt-0'>
            <div className='text-center text-xs lg:text-sm'>Join the community</div>
            <div className='font-light text-[10px] lg:text-xs'>Connect with like-minded creators, collectors, and NFTs enthusiasts!
                We also share the latest news on our social medias.
            </div>
            <div className="grid grid-cols-7 gap-2 pt-2 mx-5">
              <div className="bg-[#393D5E] rounded-md flex justify-center items-center">
                <a
                  href="https://www.tiktok.com/@3six9official"
                  target="_blank"
                  className="pl-0 pr-0"
                >
                  <SiTiktok />
                </a>
              </div>
              <div className="bg-[#393D5E] rounded-md flex justify-center items-center">
                  <a
                    href="https://www.facebook.com/3six9OFFICIAL"
                    target="_blank"
                    className="pl-0 pr-0"
                  >
                    <BsFacebook />
                  </a>
              </div>
              <div className="bg-[#393D5E] rounded-md flex justify-center items-center">
                  <a
                  href="https://twitter.com/3six9OFFICIAL"
                  target="_blank"
                  >
                    <BsTwitter />
                  </a>
              </div>
              <div className="bg-[#393D5E] rounded-md  flex justify-center items-center">
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
              <div className="bg-[#393D5E] rounded-md flex justify-center items-center">
              <a
                    href="https://www.instagram.com/3six9official/"
                    target="_blank">
                    <img
                        alt="instagram"
                        src={images.instagram}
                        className="w-3.5 lg:w-5"
                    />
                </a >
              </div>
              <div className="bg-[#393D5E] rounded-md flex justify-center items-center">
                  <a
                    href="https://t.me/threesixninenft"
                    target="_blank">
                    <img
                        alt="telegram"
                        src={images.telegram}
                        className="w-3.5 lg:w-5"
                    />
                  </a >
              </div>
              <div className="bg-[#393D5E] rounded-md flex justify-center items-center">
                  <a
                    href="https://medium.com/@3six9OFFICIAL/"
                    target="_blank">
                    <img
                        alt="Medium"
                        src={images.medium}
                        className="w-3.5 lg:w-5 py-2 lg:py-3"
                    />
                  </a >
              </div>
            </div>
        </div>

    </div>
    {/* second row */}

    <div className='pt-12 mb-16 border-t-2 border-t-[#393D5E]'>
      <div className="grid grid-cols-5">
        <div className="col-span-5 md:col-span-1">
          <div className='flex flex-col px-4'>
              <span>
                  <img className="w-10 mb-6 lg:w-20 lg:mb-6" src={images.logofooter} />
              </span>
              <span className='font-light text-[10px] lg:text-xs'>
                We help creators and businesses<br/>
                accelebrate projects and<br/>
                create impactful values for the users.
              </span>
          </div>
        </div>
          
          <div className="col-span-5 md:col-span-4 px-10 pt-10 md:pt-0">
            <div className="flex gap-x-6 md:gap-x-20 justify-center md:justify-end">
              <div className="flex flex-col gap-y-2 font-light text-[10px] lg:text-xs">
                  <span className='font-normal text-xs lg:text-md'>
                    <a href="/#/marketplace">
                      <span>Marketplace</span>
                    </a>
                  </span>
                  <span>Explore</span>
                  <span>
                    <a href="/#/marketplace">
                      <span>All Categories</span>
                    </a>
                  </span>
                  <span>
                    <a href="/#/auction">
                      <span>Auction</span>
                    </a>
                  </span>
                  <span>Drop</span>
                  <span>
                    <a href="/#/marketplace">
                      <span>Top Collection</span>
                    </a>
                  </span>
              </div>

              <div className="flex flex-col gap-y-2 font-light text-[10px] lg:text-xs">
                  <span className='font-normal text-xs lg:text-md'>Account</span>
                  <span>
                    <a href="/#/profile">
                      <span>Profile</span>
                    </a>
                  </span>
                  <span>
                    <a href="/#/marketplace">
                      <span>Favourites</span>
                    </a>
                  </span>
                  <span>
                    <a href="/#/marketplace">
                      <span>My Collection</span>
                    </a>
                  </span>
                  <span>
                    <a href="/#/create">
                      <span>Create</span>
                    </a>
                  </span>
                  <span>
                    <a href="/#/marketplace">
                      <span>Settings</span>
                    </a>
                  </span>
              </div>

              <div className="flex flex-col gap-y-2 font-light text-[10px] lg:text-xs">
                  <span className='font-normal text-xs lg:text-md'>Resources</span>
                  <span>NFT 101</span>
                  <span>Tips and Tricks</span>
                  <span>
                      <a
                        href="https://3six9.space/news-events/"
                        target="_blank"
                      >
                      Blogs
                    </a>
                  </span>
                  <span>
                      <a
                        href="https://3six9.space/#FAQ"
                        target="_blank"
                      >
                      Help Center
                    </a>
                  </span>
                  <span>
                      <a
                        href="https://3six9.space/collaborations/"
                        target="_blank"
                      >
                      Partners
                    </a>
                  </span>
              </div>

              <div className="flex flex-col gap-y-2 font-light text-[10px] lg:text-xs">
                  <span className='font-normal text-md'>Company</span>
                  <span>
                      <a
                        href="https://www.3six9.space/about"
                        target="_blank"
                      >
                      About
                    </a>
                  </span>
                  <span>
                      <a
                        href="https://www.3six9.space/about"
                        target="_blank"
                      >
                      Our Team
                    </a>
                  </span>
                  <span>
                      <a
                        href="https://www.3six9.space/about"
                        target="_blank"
                      >
                      Philosophy
                    </a>
                  </span>
              </div>
              </div>
          </div>
      </div>
    </div>
    
</footer>
  );
}

export default Footer;
