import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
    Input,
    Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavList() {
    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-4 ">
            <Typography
                as="li"
                variant="small"
                color="black"
                className="p-1 font-medium"
            >
                <a
                    href="#"
                    className="flex items-center hover:text-blue-500 font-bold transition-colors"
                >
                    Home
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="black"
                className="p-1 font-medium"
            >
                <a
                    href="#"
                    className="flex items-center hover:text-blue-500 font-bold transition-colors"
                >
                    AboutUs
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="black"
                className="p-1 font-medium"
            >
                <a
                    href="#"
                    className="flex items-center hover:text-blue-500 font-bold transition-colors"
                >
                    Create
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="black"
                className="p-1 font-medium"
            >
                <a
                    href="#"
                    className="flex items-center hover:text-blue-500 font-bold transition-colors"
                >
                    Profile
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="black"
                className="p-1 font-medium"
            >
                <a
                    href="#"
                    className="flex items-center hover:text-blue-500 font-bold transition-colors"
                >
                    Login/Signup
                </a>
            </Typography>
        </ul>
    );
}

const NavbarSimple = () => {
    const [openNav, setOpenNav] = React.useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <Navbar
            color="transparent"
            className="border-b mx-auto  px-4 py-3"
        >
            <div className="flex items-center justify-between text-white-900">
                {/* <Typography
                    as="a"
                    href="#"
                    variant="h6"
                    className="mr-4 cursor-pointer py-1.5"
                >
                    Navbar
                </Typography> */}
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <div className="relative flex w-full gap-2 md:w-max">
                    <Input
                        color="white"
                        type="search"
                        label="Search here..."
                        className="pr-20"
                        containerProps={{
                            className: "min-w-[188px]",
                        }}
                    />
                    <Button
                        size="sm"
                        className="!absolute right-1 top-1 rounded"
                    >
                        Search
                    </Button>
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList />
            </Collapse>
        </Navbar>
    );
};

export default NavbarSimple;
