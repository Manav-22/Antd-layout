import React from "react";
import { BrowserRouter,  Routes , Route } from "react-router-dom";
import { Routerr } from "./router";
import { Login } from "./login";
import { Signup } from"./signup";

export const Demo = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Routerr/>} />
                    <Route path="/Login" element={<Login/>}/>
                    <Route path="/Signup" element={<Signup/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
