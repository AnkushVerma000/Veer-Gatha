import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";

const Login = () => {
    return (
        <div
            className="relative h-screen flex justify-center items-center bg-cover"
        >
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-lg" />
            <Card
                color="transparent"
                shadow={false}
                className="relative z-10 w-80 max-w-screen-lg sm:w-96"
            >
                <Typography variant="h1" color="white">
                    Login
                </Typography>
                <Typography
                    color="white"
                    className="text-[0.9rem] mt-1 font-normal "
                >
                    Enter your details to register.
                </Typography>
                <form className="mt-8 mb-2">
                    <div className="mb-4 flex flex-col gap-6">
                        <Input size="lg" label="Name" color="white" />
                        <Input size="lg" label="Email" color="white" />
                        <Input
                            type="password"
                            size="lg"
                            label="Password"
                            color="white"
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
                    <Button className="mt-6" fullWidth color="white">
                        Login
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default Login;
