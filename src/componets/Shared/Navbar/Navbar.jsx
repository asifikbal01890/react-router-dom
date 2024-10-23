import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {

    return (
        <div className='flex justify-center gap-6 bg-slate-300 py-6'>
            {/* <NavLink className={({ isActive, isPending }) =>
                isPending ? "text-green-600" : isActive ? "text-red-600" : ""
            } to={"/"}>Home</NavLink>

            <NavLink className={({ isActive, isPending }) =>
                isPending ? "text-green-600" : isActive ? "text-red-600" : ""
            } to={"/users"}>Users</NavLink>

            <NavLink className={({ isActive }) =>
                 isActive ? "text-red-600" : ""
            } to={"/posts"}>Posts</NavLink>

            <NavLink className={({ isActive, isPending }) =>
                isPending ? "text-green-600" : isActive ? "text-red-600" : ""
            } to={"/about"}>About</NavLink>

            <NavLink className={({ isActive, isPending }) =>
                isPending ? "text-green-600" : isActive ? "text-red-600" : ""
            } to={"/contact"}>Contact</NavLink> */}

            <NavLink to={"/"}>Home</NavLink>

            <NavLink to={"/users"}>Users</NavLink>

            <NavLink to={"/posts"}>Posts</NavLink>

            <NavLink to={"/about"}>About</NavLink>

            <NavLink to={"/contact"}>Contact</NavLink>

        </div>
    );
};

export default Navbar;