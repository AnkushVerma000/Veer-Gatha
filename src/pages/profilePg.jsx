import React from "react";
import bg from "../assets/imgs/homepgBg.png";
import { Button } from "@material-tailwind/react";
import NavbarSimple from "../components/navBar";

const ProfilePg = () => {
    return (
        <>
            <div id="TopContainer ">
                <img
                    src={bg}
                    alt=""
                    className=" bg-auto w-screen  absolute z-[-1]"
                />
                <NavbarSimple />
                <div className="text-white w-screen h-[69.5vh] flex flex-col gap-2 justify-center items-center">
                    <h1 className="font-extrabold text-[1.6rem]">
                        EXPERIENCE WHEN SHARED BECOMES INSPIRATION
                    </h1>
                    <h5 className="font-medium text-[1.1rem]">
                        SHARE{" "}
                        <span className="font-extrabold text-[1.3rem]">& </span>
                        INSPIRE
                    </h5>
                    <Button color="white" className="text-black">
                        Learn More
                    </Button>
                </div>
            </div>
            <div id="bottomContainer" className="grid grid-cols-4 ">
                <div id="panel " className="relative   ">
                    <div
                        id="profileImg"
                        className="bg-white absolute top-[-5rem] right-0 border-r-2 border-gray-300 p-[0.5rem]"
                    >
                        <img
                            src="https://plus.unsplash.com/premium_photo-1688891564708-9b2247085923?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="profilePic"
                            className="w-[12rem] border-1 drop-shadow-lg "
                        />
                        <div className="font-bold text-[1.2rem] text-right">Jhon Doe</div>
                        <div className="text-right">Viewer</div>
                        <div className="text-right">Description</div>
                    </div>
                </div>
                <div id="mainContainer" className="col-span-3 ">
                    <div id="panel" className="flex justify-around border-b-2 border-gray-300 my-[2rem]">
                        <div className="flex gap-[1rem]">
                            <div>Posts</div>
                            <div>Pending</div>
                        </div>
                        <div>Upgrade to Validator</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfilePg;
