import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/error-page";
import RootPg from "./root";
import SignupPg from "./pages/signUpPg";
import LoginPg from "./pages/loginPg";
import HomePg from "./pages/homePg";
import ProfilePg from "./pages/profilePg";


const router = createBrowserRouter([
    {
        path: "/",
        element: <RootPg />,
        // errorElement: <ErrorPage />,
        children: [
            {
                path: "/signup",
                element: <SignupPg />,
            },
            {
                path: "/login",
                element: <LoginPg />,
            },{
                path: "/home",
                element: <HomePg />,
            },{
                path: "/profile",
                element: <ProfilePg />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>
);

// {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//     children: [
//         {
//             path: "/",
//             element: <HomePg />,
//         },
//         {
//             path: "/signup",
//             element: <SignUpPg />,
//         },
//         {
//             path: "/login",
//             element: <LoginPg />,
//         },

//     ],
// }
