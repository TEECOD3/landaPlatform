import React from "react";
import Link from "next/link";
import LandaIcon from "@/public/icons/landa";
import DashBoardIcon from "@/public/icons/DashboardIcon";
import LearningIcon from "@/public/icons/LearningpageIcon";
import Arrowright from "@/public/icons/ArrowRight";
import LogoutIcon from "@/public/icons/Logout";

const Sidebar = () => {
  return (
    <div className="min-h-[100%] border-r border-gray/40 bg-blue-100 flex flex-col justify-between  w-full">
      <div className="flex flex-col justify-between  p-5">
        <div className="p-4">
          <LandaIcon />
        </div>
        <div className="flex flex-col mt-14  items-center justify-center text-base capitalize font-normal">
          <Link href="/" className="w-[90%] p-4  flex gap-6">
            <DashBoardIcon className="text-4xl" />
            dashboard
          </Link>
          <Link href="/learning" className="w-[90%] p-4  flex gap-6">
            <LearningIcon className="text-black-100" />
            Learning
          </Link>
        </div>
      </div>

      <div className="">
        <div className="flex flex-col w-full mx-auto gap-4 font-medium capitalize font-xl">
          <div className="flex w-[90%] mx-auto bg-blue-600 text-white p-6 items-center  gap-x-2">
            <p>Find more Degrees and Short Courses</p>
            <span className="bg-white p-4 cursor-pointer">
              <Arrowright className=" h-4 w-4 animate-bounce text-black-100 " />
            </span>
          </div>
          <div className="flex p-6 justify-between items-center cursor-pointer">
            logout
            <div className="">
              <LogoutIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
