import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { AiFillEye } from "react-icons/ai";

const HomeCard = () => {
    return (
        <Card className="mt-6 w-96">
            <CardHeader color="blue-gray" className="relative h-56">
                <img
                    src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                    alt="card-image"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    Title
                </Typography>
                <div className="flex justify-between">
                    <Typography
                        variant="h6"
                        color="blue-gray"
                        className="mb-2 font-light"
                    >
                        Writer name
                    </Typography>
                    <div className="flex justify-between gap-2">
                        <Typography className="mb-2 text-[0.8rem] font-light flex justify-center items-center">
                            21st Aug, 2023
                        </Typography>
                        <Typography className="px-5 mb-2 font-light text-[0.8rem] flex justify-center items-center">
                            <span className="font-light flex">
                                {" "}
                                <AiFillEye />
                            </span>{" "}
                            1k Views
                        </Typography>
                    </div>
                </div>
                <Typography className="text-[0.85rem] font-extralight">
                    The place is close to Barceloneta Beach and bus stop just 2
                    min by walk and near to &quot;Naviglio&quot; where you can
                    enjoy the main night life in Barcelona.
                </Typography>
            </CardBody>
            <CardFooter className="pt-0 ">
                <a
                    href=""
                    className="text-[0.8rem] font-extrabold bg-transparent text-black border-0 underline decoration-dotted"
                >
                    View More
                </a>
            </CardFooter>
        </Card>
    );
};

export default HomeCard;
