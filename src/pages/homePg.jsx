import React from "react";
import bg from "../assets/imgs/homepgBg.png";
import { Button } from "@material-tailwind/react";
import NavbarSimple from "../components/navBar";
import HomeCard from "../components/StoryPg/HomeCards";

const HomePg = () => {
    return (
        <>
            <div className="TopContainer ">
                <img
                    src={bg}
                    alt=""
                    className=" bg-auto w-screen h-[80vh] absolute z-[-1]"
                />
                <NavbarSimple />
                <div className="text-white w-screen h-[80vh] flex flex-col gap-2 justify-center items-center">
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
            <div className="mainContainer p-8  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <HomeCard />
                <HomeCard />
                <HomeCard />
                <HomeCard />
                <HomeCard />
                <HomeCard />
                <HomeCard />
                <HomeCard />
                <HomeCard />
                <HomeCard />
                <HomeCard />
                <HomeCard />
                <HomeCard />
            </div>
        </>
    );
};

export default HomePg;
