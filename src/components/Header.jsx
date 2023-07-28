import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  console.log(location.pathname);

  // write function if route === location.pathname return true
  // else return false

  return (
    <div className="bg-white border-b shadow-sm sticky top-0">
      <header className="flex justify-between items-center px-3 max-w-6xl my-auto mx-auto">
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="logo"
            className="h-8 cursor-pointer"
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`py-3 text-sm font-semibold text-grey-400 border-b-[3px] border-b-transparent`}
            >
              About
            </li>
            <li>Offers</li>
            <li>Profile</li>
            <li>Sign in</li>
          </ul>
        </div>
      </header>
    </div>
  );
}
