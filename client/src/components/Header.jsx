import React from 'react';
import { FaMicroscope } from "react-icons/fa"; 
import { Link } from "react-router-dom";
import sparrowLogo from '../images/sparrow.png'; 
import {useSelector} from "react-redux";


const Header = () => {
  const {currentUser}=useSelector((state)=>state.user);

  return (
    <header className="bg-gradient-to-r from-purple-900 to-purple-400 shadow-md p-3">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        
        {/* UrbanNest Logo and Text */}
        <Link to="/" className="pl-2 flex items-center">
          <img 
            src={sparrowLogo}
            alt="UrbanNest Logo" 
            className="w-10 h-10 mr-2" 
          />
          <h1 className="font-normal text-2xl sm:text-3xl text-white font-semibold">
            UrbanNest
          </h1>
        </Link>
        
        {/* Search Bar */}
        <form className="flex items-center justify-center w-full sm:w-auto mx-auto bg-white shadow-sm rounded-md p-1">
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-transparent focus:outline-none w-40 sm:w-56 rounded-l-md p-1 text-gray-800 placeholder-gray-400"
          />
          <FaMicroscope className="text-slate-600 ml-2 p-1 bg-slate-200 rounded-r-md cursor-pointer" />
        </form>

        {/* Navigation Links */}
        <ul className="flex gap-3">
          <li className="hidden sm:inline text-white hover:underline pr-2">
            <Link to="/">Home</Link>
          </li>
          <li className="hidden sm:inline text-white hover:underline pr-2">
            <Link to="/about">About</Link>
          </li>

          <Link to='/profile'>
            {currentUser ? (
              <img
                className='rounded-full h-7 w-7 object-cover'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <li className=' text-slate-700 hover:underline'> Sign in</li>
            )}
          </Link>


        {
          /*
        
          <li className="hidden sm:inline text-white hover:underline pr-2">
            <Link to="/signin">Sign In</Link>
          </li>
        */
        
        }
          
        
        
          
         
        </ul>
      </div>
    </header>
  );
};

export default Header;
