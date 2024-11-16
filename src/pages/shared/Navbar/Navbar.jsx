import { NavLink } from 'react-router-dom';
import eco_wonderland from '../../../../public/images/eco-wonderland-cropted.png'
import '../../../index.css'
import CustomDropdown from '../../../components/CustomDropdown';
// import { useEffect, useState } from 'react';


const Navbar = () => {
  const users = false;

    const navLinks = (
        <>
          <li>
            <NavLink to="/" className={({ isActive }) =>
              isActive
                ? 'text-[#fff] rounded-0 work-sans font-semibold text-[18px] px-3 py-2'
                : 'text-[18px]'
              }
            >
              Home
            </NavLink>
          </li>
          <CustomDropdown />
          <li>
            <NavLink to="/add-tourist-spot" className={({ isActive }) =>
              isActive
                ? 'text-[#fff] rounded-0 work-sans font-semibold text-[18px] px-3 py-2'
                : 'text-[18px]'
              }
            >
               Add Tourists Spot
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-list" className={({ isActive }) =>
              isActive
                ? 'text-[#fff] rounded-0 work-sans font-semibold text-[18px] px-3 py-2'
                : 'text-[18px]'
              }
            >
              My List
            </NavLink>
          </li>
          <li>
            <NavLink to="/register" className={({ isActive }) =>
              isActive
                ? 'text-[#fff] rounded-0 work-sans font-semibold text-[18px] px-3 py-2'
                : 'text-[18px]'
              }
            >
              {
                users ? "Logout" : "Register"
              }
            </NavLink>
          </li>
        </>
      );
      
      

    return (
        <div className="roboto navbar flex justify-between px-12 lg:flex lg:flex-col ">
            <div className="navbar-start lg:flex lg:flex-col lg:items-center ">
                {/* <a className="btn">Button</a> */}
                <div className='lg:flex lg:flex-col lg:items-center '>
                    <img className='w-12 lg:w-32' src={eco_wonderland} alt="eco wonderland" />
                </div>
            </div>
            <div className="navbar-end">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            
        </div>
    );
};

export default Navbar;