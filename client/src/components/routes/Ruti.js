import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import Breakfast from "../pages/Breakfast";
import Brunch from "../pages/Brunch";
import Lunch from "../pages/Lunch";
import Dinner from "../pages/Dinner";
import Login from "../pages/Login";
import Register from "../pages/Register";
import LogOut from "../pages/AfterLogin/LogOut";
import MyProfile from "../pages/AfterLogin/MyProfile"
import MyRecipes from "../pages/AfterLogin/MyRecipes"
import Notfound from "../pages/Notfound";

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
                <Route path="/myprofile" element={<MyProfile />} />
                <Route path="/myrecipes" element={<MyRecipes />} />
                <Route path="/logout" element={<LogOut />} />
                <Route path='*' element={<Notfound />} />
            </Routes>
        </div>
    )
}
