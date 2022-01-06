import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import Breakfast from "../pages/Menu/Breakfast";
import Brunch from "../pages/Menu/Brunch";
import Lunch from "../pages/Menu/Lunch";
import Dinner from "../pages/Menu/Dinner";
import Login from "../pages/Account/Login";
import Register from "../pages/Account/Register";
import LogOut from "../pages/AfterLogin/LogOut";
import MyProfile from "../pages/AfterLogin/MyProfile"
import MyRecipes from "../pages/AfterLogin/MyRecipes"
import CreateRecipe from "../pages/AfterLogin/CreateRecipe";
import Notfound from "../pages/Notfound";
export default function Ruti() {
    return (
        <div>
            <Routes>
                {["/", "/home"].map((path, index) =>
                    <Route path={path} element={<Home />} key={index} />
                )}
                <Route path="/breakfast" element={<Breakfast />} />
                <Route path="/brunch" element={<Brunch />} />
                <Route path="/lunch" element={<Lunch />} />
                <Route path="/dinner" element={<Dinner />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/myprofile" element={<MyProfile />} />
                <Route path="/myrecipes" element={<MyRecipes />} />
                <Route path="/createrecipes" element={<CreateRecipe />} />
                <Route path="/logout" element={<LogOut />} />
                <Route path='*' element={<Notfound />} />
            </Routes>
        </div>
    )
}
