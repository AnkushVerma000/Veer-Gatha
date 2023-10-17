import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";


import { Routes, Route } from "react-router-dom";
import LoginPg from "./components/login.jsx";
import SignPg from "./components/signup.jsx";
import HomePg from "./components/Home.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <App />
                <Routes>
                <Route exact path="/" element={<HomePg />}></Route>
                <Route exact path="/Home" element={<HomePg />}></Route>
                <Route exact path="/login" element={<LoginPg />}></Route>
                <Route exact path="/signup" element={<SignPg />}></Route>
            </Routes>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);
