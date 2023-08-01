import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  function pathNameRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  console.log(location.pathname);
  console.log(pathNameRoute('/profile'));
  return (
    <div className="bg-white border-b shadow-sm sticky top-0">
      <header className="flex justify-between items-center px-3 max-w-6xl my-auto mx-auto">
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="logo"
            className="h-6 cursor-pointer"
            onClick={() => navigate('/')}
          />
        </div>
        <div>
          <ul className="flex space-x-10 cursor-pointer">
            <li
              className={`py-3 text-sm font-semibold border-b-[3px] ${
                pathNameRoute('/')
                  ? 'text-black border-b-red-500'
                  : 'text-gray-400 border-b-transparent'
              }`}
              onClick={() => navigate('/')}
            >
              Home
            </li>
            <li
              className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] ${
                pathNameRoute('/offers')
                  ? 'text-black border-b-red-500'
                  : 'text-gray-400 border-b-transparent'
              }`}
              onClick={() => navigate('/offers')}
            >
              Offers
            </li>
            <li
              className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] ${
                pathNameRoute('/profile')
                  ? 'text-black border-b-red-500'
                  : 'text-gray-400 border-b-transparent'
              }`}
              onClick={() => navigate('/profile')}
            >
              Profile
            </li>
            <li
              className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] ${
                pathNameRoute('/signIn')
                  ? 'text-black border-b-red-500'
                  : 'text-gray-400 border-b-transparent'
              }`}
              onClick={() => navigate('/signIn')}
            >
              Sign in
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
