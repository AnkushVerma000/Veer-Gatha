import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Radio,
} from "@material-tailwind/react";
import axios from "axios";
import { React, useState } from "react";

const api =
    "https://f197-2409-40d7-1030-6a4f-99e2-6cbc-d6ad-7a00.ngrok-free.app/auth/";

const Signup = () => {
    const [formData, setFormData] = useState({});
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log(formData);
            const response = await axios.post(api+"register/viewer/", formData);

            console.log("Response:", response.data);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="relative h-screen flex ">
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-lg" />
            <Card
                color="transparent"
                shadow={false}
                className="relative z-10 p-8 mt-[3rem]  ml-6 w-80 max-w-screen-lg sm:w-96"
            >
                <Typography variant="h1" color="white">
                    Sign Up
                </Typography>
                <form className="mt-4 mb-2 " onSubmit={handleFormSubmit}>
                    <div className="mb-2 flex flex-col gap-4">
                        <Input
                            id="name"
                            size="lg"
                            variant="standard"
                            label="Name"
                            color="white"
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    name: e.target.value,
                                })
                            }
                        />
                        <div className="flex gap-2">
                            <Input
                                id="contact"
                                size="lg"
                                variant="standard"
                                label="Contact"
                                color="white"
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        number: e.target.value,
                                    })
                                }
                            />
                            <Input
                                id="email"
                                size="lg"
                                variant="standard"
                                label="Email"
                                color="white"
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        email: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="flex gap-2">
                            <Input
                                id="password"
                                variant="standard"
                                type="password"
                                size="lg"
                                label="Password"
                                color="white"
                                className=""
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        password: e.target.value,
                                    });
                                }}
                            />
                            <Input
                                id="confirm_password"
                                variant="standard"
                                type="password"
                                size="lg"
                                label="Confirm Password"
                                color="white"
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        password2: e.target.value,
                                    });
                                }}
                            />
                        </div>
                        <Typography color="white">Login as</Typography>
                        <div className="flex gap-10 text-sm">
                            <Radio
                                id="type"
                                name="type"
                                label="Viewer"
                                color="blue"
                                defaultChecked
                            />
                            <Radio
                                name="type"
                                label="Validator"
                                color="white"
                            />
                        </div>
                        <Input
                            id="aadhar"
                            type="password"
                            size="lg"
                            variant="standard"
                            label="Aadhar Number "
                            color="white"
                            // onChange={(e) =>
                            //     setFormData({
                            //         ...formData,
                            //         aadhar: e.target.value,
                            //     })
                            // }
                        />
                    </div>
                    <Checkbox
                        label={
                            <Typography
                                variant="small"
                                color="white"
                                className="flex items-center font-normal"
                            >
                                I agree the
                                <a
                                    href="#"
                                    className="font-medium transition-colors hover:text-gray-900"
                                >
                                    &nbsp;Terms and Conditions
                                </a>
                            </Typography>
                        }
                        containerProps={{ className: "-ml-2.5" }}
                    />
                    <Button
                        className="mt-6 flex justify-center "
                        fullWidth
                        color="white"
                        type="submit"
                    >
                        Register
                    </Button>
                </form>
                <div className="flex justify-center text-gray-400">
                    Already a user-<span className="hover:text-white hover:font-extrabold"> <a href="/login"> Login</a></span>
                </div>
            </Card>
        </div>
    );
};

export default Signup;
