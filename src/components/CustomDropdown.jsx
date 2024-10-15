

import { useState } from "react";
import { NavLink } from "react-router-dom";

const CustomDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };


    return (
        <li className="relative">
            <button onClick={toggleDropdown}  className="bg-transparent text-[18px] px-3 py-2 work-sans font-normal text-[#1F2937] hover:text-white focus:text-white focus:outline-none">
                All Tourist Spot
            </button>
            {
                isOpen && (
                    <ul className="absolute bg-white border rounded shadow-lg mt-2">
                        <li>
                            <NavLink to={'/asia'} onClick={()=>setIsOpen(false)}  className={({ isActive }) => isActive ? 'text-[#fff] rounded-0 work-sans font-semibold text-[18px] px-3 py-2' : 'text-[18px]'} >Asia</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/africa'} onClick={()=>setIsOpen(false)}  className={({ isActive }) => isActive ? 'text-[#fff] rounded-0 work-sans font-semibold text-[18px] px-3 py-2' : 'text-[18px]'} >Africa</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/australia'} onClick={()=>setIsOpen(false)}  className={({ isActive }) => isActive ? 'text-[#fff] rounded-0 work-sans font-semibold text-[18px] px-3 py-2' : 'text-[18px]'} >Australia</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/antarctica'} onClick={()=>setIsOpen(false)}  className={({ isActive }) => isActive ? 'text-[#fff] rounded-0 work-sans font-semibold text-[18px] px-3 py-2' : 'text-[18px]'} >Antarctica</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/europe'} onClick={()=>setIsOpen(false)}  className={({ isActive }) => isActive ? 'text-[#fff] rounded-0 work-sans font-semibold text-[18px] px-3 py-2' : 'text-[18px]'} >Europe</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/north-america'} onClick={()=>setIsOpen(false)}  className={({ isActive }) => isActive ? 'text-[#fff] rounded-0 work-sans font-semibold text-[18px] px-3 py-2' : 'text-[18px]'} >North America</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/south-america'} onClick={()=>setIsOpen(false)}  className={({ isActive }) => isActive ? 'text-[#fff] rounded-0 work-sans font-semibold text-[18px] px-3 py-2' : 'text-[18px]'} >South America</NavLink>
                        </li>
                    </ul>
                )
            }
        </li>
    );
};

export default CustomDropdown;

// import { useState } from 'react';
// import { NavLink } from 'react-router-dom';

// const CustomDropdown = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => setIsOpen(!isOpen);

//   return (
//     <li className="relative">
//       <button
//         onClick={toggleDropdown}
//         className="bg-transparent text-[16px] px-3 py-2 work-sans font-medium text-black hover:text-white focus:text-white focus:outline-none"
//       >
//         All Tourists Spot
//       </button>
//       {isOpen && (
//         <ul className="absolute bg-white border rounded shadow-lg mt-2">
//           <li>
//             <NavLink
//               to="/asia"
//               className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//               onClick={() => setIsOpen(false)}
//             >
//               Asia
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/africa"
//               className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//               onClick={() => setIsOpen(false)}
//             >
//               Africa
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/australia"
//               className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//               onClick={() => setIsOpen(false)}
//             >
//               Australia
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/antarctica"
//               className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//               onClick={() => setIsOpen(false)}
//             >
//               Antarctica
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/europe"
//               className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//               onClick={() => setIsOpen(false)}
//             >
//               Europe
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/north-america"
//               className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//               onClick={() => setIsOpen(false)}
//             >
//               North America
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/south-america"
//               className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//               onClick={() => setIsOpen(false)}
//             >
//               South America
//             </NavLink>
//           </li>
//         </ul>
//       )}
//     </li>
//   );
// };

// export default CustomDropdown;
