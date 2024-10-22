import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div className='flex justify-center gap-6 bg-slate-300 py-6'>
           <Link to={"/"}>Home</Link>
           <Link to={"/users"}>Users</Link>
           <Link to={"/posts"}>Posts</Link>
           <Link to={"/about"}>About</Link>
           <Link to={"/contact"}>Contact</Link>
        
        </div>
    );
};

export default Navbar;