import React from "react";
import { Route, Routes } from "react-router-dom";
import  Home  from '../pages/Home';
import  Breakfast  from "../pages/Breakfast";
import  Brunch  from "../pages/Brunch";
import  Lunch  from "../pages/Lunch";
import  Dinner from "../pages/Dinner";
import  Login  from "../pages/Login";
import  Register from "../pages/Register";

export default function Ruti() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/breakfast" element={<Breakfast />} />
                <Route path="/brunch" element={<Brunch />} />
                <Route path="/lunch" element={<Lunch />} />
                <Route path="/dinner" element={<Dinner />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    )
}
