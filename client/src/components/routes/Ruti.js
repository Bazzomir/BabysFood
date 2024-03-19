import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Homepage from '../pages/Homepage';
import Breakfast from "../pages/Menu/Breakfast";
import Brunch from "../pages/Menu/Brunch";
import Lunch from "../pages/Menu/Lunch";
import Dinner from "../pages/Menu/Dinner";
import Login from "../pages/Account/Login";
import Register from "../pages/Account/Register";
import MyProfile from "../pages/AfterLogin/MyProfile";
import MyRecipes from "../pages/AfterLogin/MyRecipes";
import EditRecipe from "../pages/AfterLogin/EditRecipe";
import CreateRecipe from "../pages/AfterLogin/CreateRecipe";
import Notfound from "../pages/Notfound";

const token = localStorage.getItem('token');

export default function Ruti() {
    return (
        <div>
            <Routes>
                {["/", "/home"].map((path, index) =>
                    <Route path={path} element={<Homepage />} key={index} />
                )}
                <Route path="/breakfast" element={<Breakfast />} />
                <Route path="/brunch" element={<Brunch />} />
                <Route path="/lunch" element={<Lunch />} />
                <Route path="/dinner" element={<Dinner />} />
                <Route path="/login" element={token ? <Navigate to='/myprofile' /> : <Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/myprofile" element={token ? <MyProfile /> : <Navigate to='/login' />} />
                <Route path="/myrecipes" element={token ? <MyRecipes /> : <Navigate to='/login' />} />
                <Route path="/myrecipes/:id" element={token ? <EditRecipe /> : <Navigate to='/login' />} />
                <Route path="/createrecipes" element={token ? <CreateRecipe /> : <Navigate to='/login' />} />
                <Route path='*' element={<Notfound />} />
            </Routes>
        </div>
    )
}
